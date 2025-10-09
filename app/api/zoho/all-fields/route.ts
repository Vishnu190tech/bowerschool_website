import { NextRequest, NextResponse } from 'next/server';
import { zohoAPI } from '@/lib/zoho/api';

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Fetching all field metadata from Zoho...');

    const fields = await zohoAPI.getFieldMetadata('Leads');

    // Filter only picklist fields and extract their values
    const picklistFields = fields
      .filter(field => field.data_type === 'picklist' && field.pick_list_values && field.pick_list_values.length > 0)
      .map(field => ({
        api_name: field.api_name,
        field_label: field.field_label,
        data_type: field.data_type,
        values: field.pick_list_values
          .filter((item: any) => item.actual_value)
          .map((item: any) => item.actual_value)
      }));

    console.log(`✅ Found ${picklistFields.length} picklist fields in Zoho`);

    // Log each picklist field
    picklistFields.forEach(field => {
      console.log(`\n📋 ${field.field_label} (${field.api_name}):`);
      console.log(`   Values: ${field.values.join(', ')}`);
    });

    return NextResponse.json({
      success: true,
      totalFields: fields.length,
      picklistFields,
      allFields: fields.map(f => ({
        api_name: f.api_name,
        field_label: f.field_label,
        data_type: f.data_type
      }))
    });
  } catch (error) {
    console.error('Zoho all fields API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch field metadata'
      },
      { status: 500 }
    );
  }
}
