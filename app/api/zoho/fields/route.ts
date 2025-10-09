import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const field = searchParams.get('field');

    if (!field) {
      return NextResponse.json(
        { success: false, error: 'Field parameter is required' },
        { status: 400 }
      );
    }

    let values: string[] = [];

    switch (field) {
      case 'sales_department':
        values = await zohoAPI.getSalesDepartmentOptions();
        break;
      case 'program_interested':
        values = await zohoAPI.getProgramInterestedOptions();
        break;
      default:
        return NextResponse.json(
          { success: false, error: 'Invalid field name' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      field,
      values
    });
  } catch (error) {
    console.error('Zoho fields API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch field values'
      },
      { status: 500 }
    );
  }
}
