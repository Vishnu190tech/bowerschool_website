import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { zohoAPI } from '@/lib/zoho/api';
import { LeadFormData } from '@/lib/zoho/types';
import {
  mapLeadSourceToZoho,
  mapLeadStatusToZoho,
  mapLeadSubStatusToZoho,
  mapBoardToZoho,
  mapGradeToZoho,
  mapAcademicStreamToZoho,
  mapGenderToZoho,
  mapSalesDepartmentToZoho,
  mapProgramInterestedToZoho,
  mapSalutationToZoho,
} from '@/lib/zoho/enum-mappings';

export async function POST(request: NextRequest) {
  try {
    const { leadId } = await request.json();

    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    // Fetch the lead from local database
    const lead = await prisma.lead.findUnique({
      where: { id: leadId }
    });

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }

    // Check if already synced
    if (lead.zohoLeadId && lead.syncStatus === 'synced') {
      return NextResponse.json({
        success: false,
        isDuplicate: true,
        message: 'Lead already synced to Zoho',
        zohoLeadId: lead.zohoLeadId
      });
    }

    // Prepare data for Zoho with proper enum mappings
    const zohoLeadData: LeadFormData = {
      // Required fields
      lastName: lead.lastName,
      email: lead.email,
      leadSource: mapLeadSourceToZoho(lead.leadSource) || 'Website',

      // Basic contact
      firstName: lead.firstName || undefined,
      phone: lead.phone || undefined,
      salutation: mapSalutationToZoho(lead.salutation as any) || undefined,
      mobile: lead.mobile || undefined,
      secondaryEmail: lead.secondaryEmail || undefined,

      // Status
      leadStatus: mapLeadStatusToZoho(lead.leadStatus as any) || undefined,
      leadSubStatus: mapLeadSubStatusToZoho(lead.leadSubStatus as any) || undefined,

      // Student information
      grade: mapGradeToZoho(lead.grade as any) || undefined,
      board: mapBoardToZoho(lead.board as any) || undefined,
      academicStream: mapAcademicStreamToZoho(lead.academicStream as any) || undefined,
      gender: mapGenderToZoho(lead.gender as any) || undefined,
      birthday: lead.birthday || undefined,
      schoolInstitution: lead.schoolInstitution || undefined,

      // Parent/Guardian
      parentGuardianName: lead.parentGuardianName || undefined,
      parentGuardianEmail: lead.parentGuardianEmail || undefined,
      parentGuardianPhone: lead.parentGuardianPhone || undefined,
      relationshipToStudent: lead.relationshipToStudent || undefined,
      occupation: lead.occupation || undefined,

      // Address
      street: lead.street || undefined,
      city: lead.city || undefined,
      state: lead.state || undefined,
      zipCode: lead.zipCode || undefined,
      country: lead.country || undefined,

      // Sales & Program
      salesDepartment: mapSalesDepartmentToZoho(lead.salesDepartment as any) || undefined,
      programInterested: mapProgramInterestedToZoho(lead.programInterested as any) || undefined,

      // Referral
      referrerName: lead.referrerName || undefined,
      referrerEmail: lead.referrerEmail || undefined,
      referrerPhone: lead.referrerPhone || undefined,
      referralCode: lead.referralCode || undefined,

      // Marketing
      utmSource: lead.utmSource || undefined,
      utmMedium: lead.utmMedium || undefined,
      utmCampaign: lead.utmCampaign || undefined,
      utmContent: lead.utmContent || undefined,
      utmTerm: lead.utmTerm || undefined,
      otherSource: lead.otherSource || undefined,

      // Communication
      emailOptOut: lead.emailOptOut || false,
      whatsappOptOut: lead.whatsappOptOut || false,

      // Description
      description: lead.description || undefined,
    };

    // Attempt to create lead in Zoho
    const syncResult = await zohoAPI.createLead(zohoLeadData);

    if (syncResult.status === 'success' && syncResult.zohoLeadId) {
      // Update local lead with Zoho ID
      await prisma.lead.update({
        where: { id: leadId },
        data: {
          zohoLeadId: syncResult.zohoLeadId,
          syncStatus: 'synced',
          syncError: null,
          lastSyncAt: new Date(),
        }
      });

      // Log success
      await prisma.zohoSyncLog.create({
        data: {
          leadId,
          action: 'push_to_zoho',
          status: 'success',
          response: { zohoLeadId: syncResult.zohoLeadId },
        }
      });

      return NextResponse.json({
        success: true,
        message: 'Lead pushed to Zoho CRM successfully',
        zohoLeadId: syncResult.zohoLeadId
      });

    } else if (syncResult.duplicateInfo) {
      // Handle duplicate
      const zohoLeadId = syncResult.duplicateInfo.zohoLeadId;

      if (zohoLeadId) {
        // Update local lead with Zoho ID
        await prisma.lead.update({
          where: { id: leadId },
          data: {
            zohoLeadId,
            syncStatus: 'synced',
            syncError: 'Duplicate found in Zoho',
            lastSyncAt: new Date(),
          }
        });

        // Log duplicate
        await prisma.zohoSyncLog.create({
          data: {
            leadId,
            action: 'push_to_zoho',
            status: 'duplicate',
            response: syncResult.duplicateInfo,
            error: 'Duplicate lead found in Zoho',
          }
        });
      }

      return NextResponse.json({
        success: false,
        isDuplicate: true,
        message: syncResult.duplicateInfo.message || 'Duplicate lead found in Zoho',
        zohoLeadId,
        duplicateInfo: syncResult.duplicateInfo
      });

    } else {
      // Sync failed
      await prisma.lead.update({
        where: { id: leadId },
        data: {
          syncStatus: 'failed',
          syncError: syncResult.error,
          syncAttempts: { increment: 1 },
        }
      });

      // Log failure
      await prisma.zohoSyncLog.create({
        data: {
          leadId,
          action: 'push_to_zoho',
          status: 'failed',
          error: syncResult.error,
        }
      });

      return NextResponse.json({
        success: false,
        message: syncResult.error || 'Failed to push to Zoho CRM',
        error: syncResult.error
      });
    }

  } catch (error) {
    console.error('Push to Zoho error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to push to Zoho'
      },
      { status: 500 }
    );
  }
}