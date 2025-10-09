import { NextRequest, NextResponse } from 'next/server';
import { generateOAuthState, getAuthorizationUrl } from '@/lib/zoho/oauth';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    // Check if user is admin (you can add your admin authentication check here)
    // For now, we'll proceed without auth check for testing

    // Generate state for CSRF protection
    const state = generateOAuthState();

    // Store state in a secure HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('zoho_oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600 // 10 minutes
    });

    // Generate authorization URL
    const authUrl = getAuthorizationUrl(state);

    // Return the authorization URL for the client to redirect to
    return NextResponse.json({
      success: true,
      authUrl
    });
  } catch (error) {
    console.error('Authorization error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to initialize OAuth flow'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // This endpoint can be used to save initial client credentials before OAuth
    const body = await request.json();
    const { clientId, clientSecret } = body;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        {
          success: false,
          error: 'Client ID and Client Secret are required'
        },
        { status: 400 }
      );
    }

    // Store these temporarily in cookies for use during callback
    const cookieStore = await cookies();
    cookieStore.set('zoho_client_id', clientId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600 // 10 minutes
    });

    cookieStore.set('zoho_client_secret', clientSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600 // 10 minutes
    });

    // Generate state and auth URL
    const state = generateOAuthState();
    cookieStore.set('zoho_oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 600
    });

    const authUrl = getAuthorizationUrl(state);

    return NextResponse.json({
      success: true,
      authUrl
    });
  } catch (error) {
    console.error('Save credentials error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save credentials'
      },
      { status: 500 }
    );
  }
}