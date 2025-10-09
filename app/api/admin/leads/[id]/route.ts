import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { parseDuplicateError } from '@/lib/zoho/duplicate-utils';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: leadId } = await params;

    if (!leadId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Lead ID is required'
        },
        { status: 400 }
      );
    }

    // Fetch lead with all sync logs
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: {
        syncLogs: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          error: 'Lead not found'
        },
        { status: 404 }
      );
    }

    // Parse duplicate info from syncError if present
    const duplicateInfo = parseDuplicateError(lead.syncError);

    return NextResponse.json({
      success: true,
      data: {
        ...lead,
        duplicateInfo: duplicateInfo.isDuplicate ? duplicateInfo : null
      }
    });
  } catch (error) {
    console.error('Get lead details error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch lead details'
      },
      { status: 500 }
    );
  }
}
