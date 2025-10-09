import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';
import { LeadFormData } from '@/lib/zoho/types';
import { z } from 'zod';

// Validation schema for lead data
const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  leadSource: z.string().optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = leadSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.errors
        },
        { status: 400 }
      );
    }

    const leadData: LeadFormData = validationResult.data;

    // Save lead to local database and sync to Zoho
    const { lead, syncResult } = await zohoAPI.saveAndSyncLead(leadData);

    // Return response based on sync result
    if (syncResult.status === 'success') {
      return NextResponse.json({
        success: true,
        message: 'Lead submitted successfully',
        data: {
          leadId: lead.id,
          zohoLeadId: syncResult.zohoLeadId,
          syncStatus: 'synced'
        }
      });
    } else {
      // Lead was saved locally but Zoho sync failed
      return NextResponse.json({
        success: true,
        message: 'Lead saved locally, Zoho sync pending',
        data: {
          leadId: lead.id,
          syncStatus: 'pending',
          syncError: syncResult.error
        }
      });
    }
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit lead'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // This endpoint can be used to check the status of the lead submission endpoint
  return NextResponse.json({
    success: true,
    message: 'Lead submission endpoint is active',
    acceptedFields: {
      required: ['firstName', 'lastName', 'email'],
      optional: ['phone', 'company', 'message', 'source', 'leadSource']
    }
  });
}