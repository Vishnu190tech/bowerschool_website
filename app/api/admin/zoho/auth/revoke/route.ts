import { NextRequest, NextResponse } from 'next/server';
import { clearZohoCredentials } from '@/lib/zoho/oauth';

export async function POST(request: NextRequest) {
  try {
    // Clear all Zoho credentials and revoke tokens
    const success = await clearZohoCredentials();

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Zoho CRM disconnected successfully'
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to disconnect Zoho CRM'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Revoke token error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to revoke access'
      },
      { status: 500 }
    );
  }
}