import { NextRequest, NextResponse } from 'next/server';
import { getZohoCredentials, refreshAccessToken, storeZohoCredentials } from '@/lib/zoho/oauth';

export async function POST(request: NextRequest) {
  try {
    // Get current credentials
    const credentials = await getZohoCredentials();

    if (!credentials) {
      return NextResponse.json(
        {
          success: false,
          error: 'No Zoho credentials found'
        },
        { status: 404 }
      );
    }

    if (!credentials.refreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'No refresh token available'
        },
        { status: 400 }
      );
    }

    // Refresh the access token
    const newTokens = await refreshAccessToken(credentials.refreshToken);

    // Store the new tokens
    await storeZohoCredentials(
      newTokens,
      credentials.clientId,
      credentials.clientSecret
    );

    return NextResponse.json({
      success: true,
      message: 'Access token refreshed successfully',
      expiresAt: new Date(Date.now() + newTokens.expires_in * 1000)
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to refresh token'
      },
      { status: 500 }
    );
  }
}