import { NextRequest, NextResponse } from 'next/server';
import { checkZohoConnection } from '@/lib/zoho/oauth';
import { zohoAPI } from '@/lib/zoho/api';

export async function GET(request: NextRequest) {
  try {
    // Check connection status
    const connectionStatus = await checkZohoConnection();

    if (!connectionStatus.isConnected) {
      return NextResponse.json({
        success: false,
        connected: false,
        message: 'Zoho CRM is not connected',
        error: connectionStatus.error
      });
    }

    if (!connectionStatus.hasValidToken) {
      return NextResponse.json({
        success: false,
        connected: true,
        hasValidToken: false,
        message: 'Access token is expired or invalid',
        tokenExpiresAt: connectionStatus.tokenExpiresAt
      });
    }

    // Test the actual API connection
    const testResult = await zohoAPI.testConnection();

    return NextResponse.json({
      success: testResult.success,
      connected: true,
      hasValidToken: true,
      tokenExpiresAt: connectionStatus.tokenExpiresAt,
      message: testResult.message,
      details: testResult.details
    });
  } catch (error) {
    console.error('Test connection error:', error);
    return NextResponse.json(
      {
        success: false,
        connected: false,
        error: error instanceof Error ? error.message : 'Connection test failed'
      },
      { status: 500 }
    );
  }
}