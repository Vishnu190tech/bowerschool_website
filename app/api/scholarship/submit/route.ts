import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';
import { ScholarshipFormData } from '@/lib/zoho/types';
import { getProgramMapping } from '@/lib/utils/program-mapping';
import { extractUTMParams } from '@/lib/utils/utm-tracking';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

// Validation schema for scholarship form data
const scholarshipSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(10, 'Mobile number must be at least 10 characters').max(20, 'Mobile number too long'),
  consent: z.boolean(),
  page: z.string().optional(),
  confirmUpdate: z.boolean().optional(),
  zohoLeadId: z.string().nullable().optional(),
  utmParams: z.object({
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    utmContent: z.string().optional(),
    utmTerm: z.string().optional(),
    referrer: z.string().optional(),
    referralCode: z.string().optional(),
  }).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the received data for debugging
    console.log('📝 Received form data:', {
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      mobileLength: body.mobile?.length,
      consent: body.consent,
      page: body.page,
    });

    // Validate input
    const validationResult = scholarshipSchema.safeParse(body);

    if (!validationResult.success) {
      console.error('❌ Validation failed:', JSON.stringify(validationResult.error.flatten(), null, 2));
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationResult.error.flatten()
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Extract UTM parameters from multiple sources
    // 1. From the request body (passed by the form)
    const bodyUtmParams = formData.utmParams || {};

    // 2. From the referrer header or query params
    const referrer = request.headers.get('referer') || '';
    const url = new URL(referrer || request.url);
    const searchParams = url.searchParams;
    const urlUtmParams = extractUTMParams(searchParams);

    // Merge UTM parameters (body takes precedence over URL)
    const utmParams = {
      ...urlUtmParams,
      ...bodyUtmParams,
    };

    // Get program mapping based on page
    const { salesDepartment, programInterested } = getProgramMapping(formData.page || '');

    // Log captured data for debugging
    console.log('📊 Lead Capture Details:', {
      page: formData.page,
      salesDepartment,
      programInterested,
      utmParams,
      referrer,
    });

    // Create scholarship form data with UTM params
    const scholarshipFormData: ScholarshipFormData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      consent: formData.consent,
      page: formData.page,
      utmParams,
      confirmUpdate: formData.confirmUpdate,
      zohoLeadId: formData.zohoLeadId || undefined,
    };

    // Process lead in Zoho (check duplicates, create or update)
    const zohoResult = await zohoAPI.processScholarshipFormLead(
      scholarshipFormData,
      salesDepartment,
      programInterested,
      formData.confirmUpdate || false
    );

    // If duplicate found and requires confirmation
    if (zohoResult.status === 'duplicate_found' && zohoResult.requiresConfirmation) {
      return NextResponse.json({
        success: false,
        requiresConfirmation: true,
        duplicateFound: true,
        zohoLeadId: zohoResult.zohoLeadId,
        existingLead: zohoResult.existingLead,
        message: 'A lead with this email already exists. Would you like to update the existing lead?',
        data: {
          leadId: null,
          zohoLeadId: zohoResult.zohoLeadId,
          syncStatus: 'duplicate_found'
        }
      });
    }

    // Save to local database
    const lead = await zohoAPI.saveScholarshipFormToDatabase(
      scholarshipFormData,
      salesDepartment,
      programInterested,
      zohoResult.zohoLeadId
    );

    // Log the sync operation
    await prisma.zohoSyncLog.create({
      data: {
        leadId: lead.id,
        action: formData.confirmUpdate ? 'update' : 'create',
        status: zohoResult.status === 'success' ? 'success' : 'failed',
        response: {
          zohoLeadId: zohoResult.zohoLeadId,
          salesDepartment,
          programInterested,
          utmParams,
        },
        error: zohoResult.error || null,
      }
    });

    // Return appropriate response
    if (zohoResult.status === 'success') {
      return NextResponse.json({
        success: true,
        message: formData.confirmUpdate
          ? 'Lead updated successfully'
          : 'Thank you! Your information has been submitted successfully.',
        data: {
          leadId: lead.id,
          zohoLeadId: zohoResult.zohoLeadId,
          syncStatus: 'synced',
          salesDepartment,
          programInterested,
        }
      });
    } else {
      // Lead was saved locally but Zoho sync failed
      return NextResponse.json({
        success: true,
        message: 'Your information has been saved. We will contact you soon.',
        data: {
          leadId: lead.id,
          syncStatus: 'pending',
          syncError: zohoResult.error,
          salesDepartment,
          programInterested,
        }
      });
    }
  } catch (error) {
    console.error('Scholarship form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // This endpoint can be used to check the status
  return NextResponse.json({
    success: true,
    message: 'Scholarship form submission endpoint is active',
    acceptedFields: {
      required: ['name', 'email', 'mobile', 'consent'],
      optional: ['page', 'confirmUpdate', 'zohoLeadId'],
      automatic: [
        'salesDepartment (based on page)',
        'programInterested (based on salesDepartment)',
        'leadSource (always WEBSITE)',
        'utm parameters (from URL)',
        'referral information (from URL)'
      ]
    },
    pageMapping: {
      'k12': 'SEED_K12_TEAM → SEED_WEEKEND_SCHOOL',
      'k12-seed': 'SEED_K12_TEAM → SEED_WEEKEND_SCHOOL',
      'k12-school': 'SEED_K12_TEAM → SEED_WEEKEND_SCHOOL',
      'ug': 'BUILD_UG_TEAM → BUILD_BBA_ENTREPRENEURSHIP',
      'lead': 'LEAD_EXECUTIVE_TEAM → LEAD_VENTURE_BUILDING',
    }
  });
}