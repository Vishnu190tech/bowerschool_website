import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/zoho/oauth';
import { prisma } from '@/lib/prisma';
import axios from 'axios';

export async function GET() {
  try {
    // Get valid access token
    const accessToken = await getValidAccessToken();

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'No valid Zoho access token available'
        },
        { status: 401 }
      );
    }

    // Get API domain
    const credentials = await prisma.zohoCredential.findFirst({
      where: { isActive: true }
    });

    if (!credentials || !credentials.apiDomain) {
      return NextResponse.json(
        {
          success: false,
          error: 'Zoho API domain not configured'
        },
        { status: 400 }
      );
    }

    // Fetch Leads module metadata
    const response = await axios.get(
      `${credentials.apiDomain}/crm/v2/settings/fields?module=Leads`,
      {
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const fields = response.data.fields || [];

    // Categorize fields
    const categorizedFields = {
      required: fields.filter((f: any) => f.system_mandatory || f.required),
      standard: fields.filter((f: any) => !f.custom_field && !f.system_mandatory && !f.required),
      custom: fields.filter((f: any) => f.custom_field),
      readOnly: fields.filter((f: any) => f.read_only),
      all: fields
    };

    // Create a simplified view
    const fieldsSummary = fields.map((field: any) => ({
      apiName: field.api_name,
      displayLabel: field.display_label || field.field_label,
      dataType: field.data_type,
      length: field.length,
      required: field.system_mandatory || field.required,
      readOnly: field.read_only,
      custom: field.custom_field,
      tooltip: field.tooltip,
      pickListValues: field.pick_list_values?.map((p: any) => p.display_value) || null,
      defaultValue: field.default_value,
      visible: field.visible
    }));

    return NextResponse.json({
      success: true,
      data: {
        totalFields: fields.length,
        requiredFields: categorizedFields.required.length,
        standardFields: categorizedFields.standard.length,
        customFields: categorizedFields.custom.length,
        readOnlyFields: categorizedFields.readOnly.length,
        fields: fieldsSummary,
        categorized: {
          required: categorizedFields.required.map((f: any) => ({
            apiName: f.api_name,
            label: f.display_label || f.field_label,
            dataType: f.data_type
          })),
          custom: categorizedFields.custom.map((f: any) => ({
            apiName: f.api_name,
            label: f.display_label || f.field_label,
            dataType: f.data_type
          }))
        }
      }
    });
  } catch (error: any) {
    console.error('Fetch Zoho schema error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.response?.data?.message || error.message || 'Failed to fetch Zoho schema'
      },
      { status: 500 }
    );
  }
}
