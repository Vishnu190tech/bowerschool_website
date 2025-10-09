import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';
import { isValidZohoLeadId } from '@/lib/zoho/duplicate-utils';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: leadId } = await params;
    const body = await request.json();
    const { zohoLeadId } = body;

    if (!leadId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Lead ID is required'
        },
        { status: 400 }
      );
    }

    if (!zohoLeadId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Zoho Lead ID is required'
        },
        { status: 400 }
      );
    }

    // Validate Zoho Lead ID format
    if (!isValidZohoLeadId(zohoLeadId)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid Zoho Lead ID format'
        },
        { status: 400 }
      );
    }

    // Resolve the duplicate using the Zoho API service
    const result = await zohoAPI.resolveDuplicateLead(leadId, zohoLeadId);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to resolve duplicate'
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Duplicate resolved successfully',
      data: result.lead
    });
  } catch (error) {
    console.error('Resolve duplicate error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to resolve duplicate'
      },
      { status: 500 }
    );
  }
}
