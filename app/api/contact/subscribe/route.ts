import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';
import { z } from 'zod';

// Email validation schema
const emailSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  name: z.string().optional(),
  phone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  console.log('[Contact Subscribe] Request received');

  try {
    const body = await request.json();
    console.log('[Contact Subscribe] Request body:', {
      email: body.email,
      hasName: !!body.name,
      hasPhone: !!body.phone
    });

    // Validate input
    const validationResult = emailSchema.safeParse(body);

    if (!validationResult.success) {
      console.log('[Contact Subscribe] Validation failed:', validationResult.error.issues);
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address',
          errors: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const { email, name, phone } = validationResult.data;

    console.log('[Contact Subscribe] Processing subscription for:', email);

    // Parse name into first and last name if provided
    let firstName = 'Contact';
    let lastName = 'Lead';

    if (name) {
      const nameParts = name.trim().split(' ');
      firstName = nameParts[0] || 'Contact';
      lastName = nameParts.slice(1).join(' ') || nameParts[0] || 'Lead';
    } else {
      // Extract name from email if name not provided
      const emailParts = email.split('@')[0];
      const nameParts = emailParts.replace(/[._-]/g, ' ').split(' ');
      if (nameParts.length > 0) {
        firstName = nameParts[0];
        lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0];
      }
    }

    // Check if lead already exists in Zoho
    console.log('[Contact Subscribe] Checking for existing lead with email:', email);
    const existingLead = await zohoAPI.searchLeadByEmail(email);

    if (existingLead) {
      console.log('[Contact Subscribe] Lead already exists:', existingLead.id);
      return NextResponse.json({
        success: false,
        isDuplicate: true,
        message: 'This email is already registered in our system.',
        leadId: existingLead.id
      });
    }

    // Create new lead in Zoho CRM
    console.log('[Contact Subscribe] Creating new lead in Zoho CRM');
    const leadData = {
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      company: 'Individual',
      source: 'Website - Contact Form',
      message: 'Subscribed via contact form',
      leadSource: 'ONLINESTORE' as any // Website lead source
    };

    const result = await zohoAPI.createLead(leadData);

    console.log('[Contact Subscribe] Zoho API result:', {
      status: result.status,
      zohoLeadId: result.zohoLeadId,
      isDuplicate: result.duplicateInfo?.isDuplicate
    });

    // Handle the result
    if (result.status === 'success' && result.zohoLeadId) {
      console.log('[Contact Subscribe] Successfully created lead:', result.zohoLeadId);
      return NextResponse.json({
        success: true,
        message: 'Thank you! You have been successfully subscribed.',
        leadId: result.zohoLeadId
      });
    } else if (result.duplicateInfo?.isDuplicate) {
      console.log('[Contact Subscribe] Duplicate detected:', result.duplicateInfo);
      return NextResponse.json({
        success: false,
        isDuplicate: true,
        message: 'This email is already registered in our system.',
        leadId: result.duplicateInfo.zohoLeadId
      });
    } else {
      console.error('[Contact Subscribe] Failed to create lead:', result.error);
      return NextResponse.json({
        success: false,
        message: 'Unable to process your request at this moment. Please try again later.'
      });
    }
  } catch (error: any) {
    console.error('[Contact Subscribe] Unexpected error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // Check if it's an authentication issue
    if (error.message?.includes('No valid access token')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service configuration error. Please contact support.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check if the service is working
export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Contact subscription endpoint is active',
    note: 'Use POST method with email (and optionally name and phone) in the body to subscribe'
  });
}
