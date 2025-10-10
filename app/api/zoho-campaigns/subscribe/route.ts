import { NextRequest, NextResponse } from 'next/server';
import { zohoCampaignsAPI } from '@/lib/zoho/campaigns-api';
import { z } from 'zod';

// Simple email validation schema
const emailSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  listKey: z.string().optional(), // Optional list key if different from default
});

export async function POST(request: NextRequest) {
  console.log('[API Route] Subscribe request received');

  try {
    const body = await request.json();
    console.log('[API Route] Request body:', { email: body.email, hasListKey: !!body.listKey });

    // Validate input
    const validationResult = emailSchema.safeParse(body);

    if (!validationResult.success) {
      console.log('[API Route] Validation failed:', validationResult.error.issues);
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address',
          errors: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const { email, listKey } = validationResult.data;

    // Check environment configuration
    const hasListKey = listKey || process.env.ZOHO_CAMPAIGNS_LIST_KEY;
    if (!hasListKey) {
      console.error('[API Route] No list key configured in environment');
      return NextResponse.json(
        {
          success: false,
          message: 'Mailing list not configured. Please contact support.'
        },
        { status: 500 }
      );
    }

    console.log('[API Route] Processing subscription for:', email);
    console.log('[API Route] Using list key:', listKey ? 'custom' : 'default from env');

    // PRODUCTION MODE: Call Zoho Campaigns
    const result = await zohoCampaignsAPI.addContactToList(email, listKey);

    console.log('[API Route] Zoho API result:', {
      success: result.success,
      isDuplicate: result.isDuplicate,
      message: result.message
    });

    // Return response based on the result
    if (result.success) {
      console.log('[API Route] Subscription successful');
      return NextResponse.json({
        success: true,
        message: result.message || 'Thank you! You have been successfully subscribed.'
      });
    } else if (result.isDuplicate) {
      console.log('[API Route] Duplicate email detected');
      // Return duplicate message with 200 status (not an error from user perspective)
      return NextResponse.json({
        success: false,
        isDuplicate: true,
        message: result.message || 'This email is already registered in our mailing list.'
      });
    } else {
      console.error('[API Route] Subscription failed:', result.message);
      // Other errors - don't expose internal errors to user
      return NextResponse.json({
        success: false,
        message: result.message || 'Unable to subscribe at this moment. Please try again later.'
      });
    }
  } catch (error: any) {
    console.error('[API Route] Unexpected error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // Check if it's an authentication issue
    if (error.message?.includes('No valid access token')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service configuration error. Please contact support.'
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
    message: 'Zoho Campaigns subscription endpoint is active',
    note: 'Use POST method with email in the body to subscribe'
  });
}