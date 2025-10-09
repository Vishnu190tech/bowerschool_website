import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';
import { checkZohoConnection } from '@/lib/zoho/oauth';

export async function POST(request: NextRequest) {
  try {
    // Check if Zoho is connected
    const connectionStatus = await checkZohoConnection();

    if (!connectionStatus.isConnected || !connectionStatus.hasValidToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'Zoho CRM is not connected or token is invalid'
        },
        { status: 400 }
      );
    }

    // Sync all pending leads
    const result = await zohoAPI.syncPendingLeads();

    return NextResponse.json({
      success: true,
      message: `Synced ${result.synced} leads successfully, ${result.failed} failed`,
      data: {
        synced: result.synced,
        failed: result.failed,
        total: result.synced + result.failed,
        results: result.results
      }
    });
  } catch (error) {
    console.error('Sync leads error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to sync leads'
      },
      { status: 500 }
    );
  }
}