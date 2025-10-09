import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Helper function to convert empty strings and null to undefined
    const cleanValue = (value: any) => {
      if (value === '' || value === null || value === undefined) {
        return undefined;
      }
      return value;
    };

    // Convert birthday string to Date if present
    const leadData = {
      ...data,
      birthday: data.birthday ? new Date(data.birthday) : undefined,
    };

    // Create new lead in local database
    const lead = await prisma.lead.create({
      data: {
        // Required fields
        lastName: leadData.lastName,
        email: leadData.email.toLowerCase(),
        leadSource: leadData.leadSource,

        // Basic contact
        firstName: leadData.firstName,
        phone: cleanValue(leadData.phone),
        salutation: cleanValue(leadData.salutation),
        mobile: cleanValue(leadData.mobile),
        secondaryEmail: cleanValue(leadData.secondaryEmail),

        // Status
        leadStatus: leadData.leadStatus || 'QUALIFIED_INTERESTED',
        leadSubStatus: cleanValue(leadData.leadSubStatus),

        // Student information
        grade: cleanValue(leadData.grade),
        board: cleanValue(leadData.board),
        academicStream: cleanValue(leadData.academicStream),
        gender: cleanValue(leadData.gender),
        birthday: leadData.birthday || undefined,
        schoolInstitution: cleanValue(leadData.schoolInstitution),

        // Parent/Guardian
        parentGuardianName: cleanValue(leadData.parentGuardianName),
        parentGuardianEmail: cleanValue(leadData.parentGuardianEmail),
        parentGuardianPhone: cleanValue(leadData.parentGuardianPhone),
        relationshipToStudent: cleanValue(leadData.relationshipToStudent),
        occupation: cleanValue(leadData.occupation),

        // Address
        street: cleanValue(leadData.street),
        city: cleanValue(leadData.city),
        state: cleanValue(leadData.state),
        zipCode: cleanValue(leadData.zipCode),
        country: cleanValue(leadData.country),

        // Program & Referral
        salesDepartment: cleanValue(leadData.salesDepartment),
        programInterested: cleanValue(leadData.programInterested),
        referrerName: cleanValue(leadData.referrerName),
        referrerEmail: cleanValue(leadData.referrerEmail),
        referrerPhone: cleanValue(leadData.referrerPhone),
        referralCode: cleanValue(leadData.referralCode),

        // Marketing
        utmSource: cleanValue(leadData.utmSource),
        utmMedium: cleanValue(leadData.utmMedium),
        utmCampaign: cleanValue(leadData.utmCampaign),
        utmContent: cleanValue(leadData.utmContent),
        utmTerm: cleanValue(leadData.utmTerm),
        otherSource: cleanValue(leadData.otherSource),

        // Communication preferences
        emailOptOut: leadData.emailOptOut || false,
        whatsappOptOut: leadData.whatsappOptOut || false,

        // Description
        description: cleanValue(leadData.description),

        // Sync status - always pending for manual sync
        syncStatus: 'pending',
      }
    });

    // Create a sync log entry
    await prisma.zohoSyncLog.create({
      data: {
        leadId: lead.id,
        action: 'create_local',
        status: 'pending',
        request: data,
      }
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: 'Lead saved locally'
    });

  } catch (error) {
    console.error('Save lead error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to save lead'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID is required for update' },
        { status: 400 }
      );
    }

    // Convert birthday string to Date if present
    if (updateData.birthday) {
      updateData.birthday = new Date(updateData.birthday);
    }

    // Clean up empty strings for enum fields - convert to undefined
    const cleanData = Object.entries(updateData).reduce((acc, [key, value]) => {
      // Convert empty strings to undefined for enum fields
      if (value === '' || value === null) {
        acc[key] = undefined;
      } else {
        acc[key] = value;
      }
      return acc;
    }, {} as any);

    // Update existing lead
    const lead = await prisma.lead.update({
      where: { id },
      data: {
        ...cleanData,
        updatedAt: new Date(),
      }
    });

    // Create update log
    await prisma.zohoSyncLog.create({
      data: {
        leadId: lead.id,
        action: 'update_local',
        status: 'pending',
        request: updateData,
      }
    });

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      message: 'Lead updated successfully'
    });

  } catch (error) {
    console.error('Update lead error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update lead'
      },
      { status: 500 }
    );
  }
}