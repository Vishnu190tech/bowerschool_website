import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, storeZohoCredentials } from '@/lib/zoho/oauth';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    // Check for OAuth errors
    if (error) {
      console.error('OAuth error:', error);
      return NextResponse.redirect(
        new URL('/admin/dashboard?zoho_error=' + encodeURIComponent(error), request.url)
      );
    }

    // Validate required parameters
    if (!code || !state) {
      return NextResponse.redirect(
        new URL('/admin/dashboard?zoho_error=missing_parameters', request.url)
      );
    }

    // Verify state to prevent CSRF attacks
    const cookieStore = await cookies();
    const storedState = cookieStore.get('zoho_oauth_state')?.value;

    if (!storedState || storedState !== state) {
      console.error('State mismatch - potential CSRF attack');
      return NextResponse.redirect(
        new URL('/admin/dashboard?zoho_error=invalid_state', request.url)
      );
    }

    // Get stored client credentials from cookies or environment
    let clientId = cookieStore.get('zoho_client_id')?.value || process.env.ZOHO_CLIENT_ID;
    let clientSecret = cookieStore.get('zoho_client_secret')?.value || process.env.ZOHO_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return NextResponse.redirect(
        new URL('/admin/dashboard?zoho_error=missing_credentials', request.url)
      );
    }

    // Exchange authorization code for tokens
    const tokens = await exchangeCodeForTokens(code);

    // Store tokens and credentials in database
    await storeZohoCredentials(tokens, clientId, clientSecret);

    // Clear temporary cookies
    cookieStore.delete('zoho_oauth_state');
    cookieStore.delete('zoho_client_id');
    cookieStore.delete('zoho_client_secret');

    // Redirect to success page
    return NextResponse.redirect(
      new URL('/admin/dashboard?zoho_connected=true&section=zoho', request.url)
    );
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/admin/dashboard?zoho_error=' + encodeURIComponent('Failed to complete OAuth flow'), request.url)
    );
  }
}