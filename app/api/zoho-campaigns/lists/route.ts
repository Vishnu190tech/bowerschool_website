import { NextRequest, NextResponse } from 'next/server';
import { zohoCampaignsAPI } from '@/lib/zoho/campaigns-api';

// GET endpoint to fetch all Zoho Campaigns mailing lists
export async function GET() {
  try {
    // Fetch all mailing lists from Zoho Campaigns
    const result = await zohoCampaignsAPI.getMailingLists();

    if (result.success && result.lists) {
      console.log('📋 Found Zoho Campaigns lists:', result.lists.length);

      // Log each list with its key
      result.lists.forEach((list, index) => {
        console.log(`\n📧 List ${index + 1}:`);
        console.log(`  Name: ${list.listname}`);
        console.log(`  Key: ${list.listkey}`);
        console.log(`  Email: ${list.listemailid}`);
        console.log(`  Status: ${list.status}`);
        console.log(`  Contacts: ${list.contact_count}`);
      });

      // If there are lists, automatically select the first active one
      const activeLists = result.lists.filter(list => list.status === 'active' || list.status === 'Active');
      const selectedList = activeLists[0] || result.lists[0];

      if (selectedList) {
        console.log(`\n✅ Selected List for ContactFormSection:`);
        console.log(`  Name: ${selectedList.listname}`);
        console.log(`  Key: ${selectedList.listkey}`);
        console.log(`\n🔑 Add this to your .env.local file:`);
        console.log(`ZOHO_CAMPAIGNS_LIST_KEY="${selectedList.listkey}"`);
      }

      return NextResponse.json({
        success: true,
        lists: result.lists,
        selectedList: selectedList,
        envVariable: selectedList ? `ZOHO_CAMPAIGNS_LIST_KEY="${selectedList.listkey}"` : null
      });
    } else {
      return NextResponse.json({
        success: false,
        message: result.message || 'No mailing lists found',
        lists: []
      });
    }
  } catch (error) {
    console.error('Error fetching Zoho Campaigns lists:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch Zoho Campaigns lists. Make sure Zoho OAuth is configured.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}