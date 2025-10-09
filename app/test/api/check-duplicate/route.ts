import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { zohoAPI } from '@/lib/zoho/api';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // First check in local database
    const localLead = await prisma.lead.findFirst({
      where: { email: email.toLowerCase() },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        leadSource: true,
        salutation: true,
        mobile: true,
        secondaryEmail: true,
        leadStatus: true,
        leadSubStatus: true,
        grade: true,
        board: true,
        academicStream: true,
        gender: true,
        birthday: true,
        schoolInstitution: true,
        parentGuardianName: true,
        parentGuardianEmail: true,
        parentGuardianPhone: true,
        relationshipToStudent: true,
        occupation: true,
        street: true,
        city: true,
        state: true,
        zipCode: true,
        country: true,
        salesDepartment: true,
        programInterested: true,
        referrerName: true,
        referrerEmail: true,
        referrerPhone: true,
        referralCode: true,
        utmSource: true,
        utmMedium: true,
        utmCampaign: true,
        utmContent: true,
        utmTerm: true,
        otherSource: true,
        description: true,
        emailOptOut: true,
        whatsappOptOut: true,
        zohoLeadId: true,
        syncStatus: true,
      }
    });

    if (localLead) {
      // Convert birthday to string format if exists
      const leadData = {
        ...localLead,
        birthday: localLead.birthday ? localLead.birthday.toISOString().split('T')[0] : undefined,
      };

      return NextResponse.json({
        isDuplicate: true,
        source: 'local',
        leadData,
        localLeadId: localLead.id,
        zohoLeadId: localLead.zohoLeadId,
        message: 'Lead found in local database'
      });
    }

    // Check in Zoho CRM if connected
    try {
      const zohoLead = await zohoAPI.searchLeadByEmail(email);

      if (zohoLead) {
        // Map Zoho lead data to our schema
        const leadData = {
          firstName: zohoLead.First_Name || '',
          lastName: zohoLead.Last_Name || '',
          email: zohoLead.Email || '',
          phone: zohoLead.Phone || '',
          mobile: zohoLead.Mobile || '',
          secondaryEmail: zohoLead.Secondary_Email || '',
          // Map other fields as needed
          description: zohoLead.Description || '',
        };

        return NextResponse.json({
          isDuplicate: true,
          source: 'zoho',
          leadData,
          zohoLeadId: zohoLead.id,
          message: 'Lead found in Zoho CRM'
        });
      }
    } catch (zohoError) {
      console.error('Zoho search error:', zohoError);
      // Continue without Zoho check if there's an error
    }

    // No duplicate found
    return NextResponse.json({
      isDuplicate: false,
      message: 'No duplicate found'
    });

  } catch (error) {
    console.error('Check duplicate error:', error);
    return NextResponse.json(
      { error: 'Failed to check for duplicates' },
      { status: 500 }
    );
  }
}