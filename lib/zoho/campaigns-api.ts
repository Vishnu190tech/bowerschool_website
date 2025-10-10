import axios, { AxiosInstance } from 'axios';
import { getValidAccessToken } from './oauth';

class ZohoCampaignsAPI {
  private api: AxiosInstance | null = null;
  // You'll need to set this list key in environment variable or admin settings
  private defaultListKey: string = process.env.ZOHO_CAMPAIGNS_LIST_KEY || '';

  /**
   * Initialize the API client with the current access token
   */
  private async initializeClient(): Promise<void> {
    const accessToken = await getValidAccessToken();

    if (!accessToken) {
      console.error('[ZohoCampaignsAPI] Failed to get access token');
      throw new Error('No valid access token available. Please reconnect Zoho in admin panel.');
    }

    // Zoho Campaigns uses a different base URL - using India data center
    const baseURL = 'https://campaigns.zoho.in/api/v1.1';

    console.log('[ZohoCampaignsAPI] Initializing client with base URL:', baseURL);

    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      timeout: 30000 // 30 second timeout
    });
  }

  /**
   * Check if a contact exists in Zoho Campaigns
   * Note: Zoho Campaigns doesn't have a direct API to check existence,
   * so we'll try to add and check for duplicate response
   */
  async checkContactExists(email: string, listKey?: string): Promise<boolean> {
    try {
      if (!this.api) {
        await this.initializeClient();
      }

      const targetListKey = listKey || this.defaultListKey;

      if (!targetListKey) {
        throw new Error('No list key provided and no default list key configured');
      }

      // Try to get contact details (this may not work for all Zoho Campaigns setups)
      // Alternative approach is to try adding and check for duplicate error
      const params = new URLSearchParams({
        resfmt: 'JSON',
        listkey: targetListKey,
        contactemail: email
      });

      const response = await this.api!.get(`/getcontactdetails?${params.toString()}`);

      if (response.data && response.data.status === 'success') {
        return true; // Contact exists
      }

      return false;
    } catch (error: any) {
      // If we get an error, it might mean the contact doesn't exist
      console.log('Check contact exists error:', error.response?.data || error.message);
      return false;
    }
  }

  /**
   * Subscribe a contact to a Zoho Campaigns list
   */
  async subscribeContact(email: string, listKey?: string): Promise<{
    success: boolean;
    message: string;
    isDuplicate?: boolean;
  }> {
    try {
      if (!this.api) {
        await this.initializeClient();
      }

      const targetListKey = listKey || this.defaultListKey;

      if (!targetListKey) {
        return {
          success: false,
          message: 'No list key provided and no default list key configured'
        };
      }

      // Prepare the request data
      const params = new URLSearchParams({
        resfmt: 'JSON',
        listkey: targetListKey,
        contactinfo: JSON.stringify({
          'Contact Email': email
        })
      });

      // Make the API call to subscribe the contact
      const response = await this.api!.post('/json/listsubscribe', params.toString());

      console.log('Zoho Campaigns response:', response.data);

      // Check the response
      if (response.data) {
        const data = response.data;

        // Check for various response codes
        if (data.status === 'success' || data.code === '0') {
          return {
            success: true,
            message: 'Successfully subscribed to the mailing list'
          };
        } else if (data.code === '2001' || data.message?.toLowerCase().includes('already')) {
          // Contact already exists
          return {
            success: false,
            message: 'This email is already registered',
            isDuplicate: true
          };
        } else if (data.code === '2002') {
          // Invalid email
          return {
            success: false,
            message: 'Invalid email address'
          };
        } else {
          // Other error
          return {
            success: false,
            message: data.message || 'Failed to subscribe to the mailing list'
          };
        }
      }

      return {
        success: false,
        message: 'No response from Zoho Campaigns'
      };
    } catch (error: any) {
      console.error('Subscribe contact error:', error.response?.data || error);

      // Check if it's a duplicate error in the error response
      if (error.response?.data?.message?.toLowerCase().includes('already') ||
          error.response?.data?.code === '2001') {
        return {
          success: false,
          message: 'This email is already registered',
          isDuplicate: true
        };
      }

      return {
        success: false,
        message: error.response?.data?.message || 'Failed to connect to Zoho Campaigns'
      };
    }
  }

  /**
   * Get all mailing lists from Zoho Campaigns
   */
  async getMailingLists(): Promise<{
    success: boolean;
    lists?: Array<{
      listkey: string;
      listname: string;
      listemailid: string;
      status: string;
      contact_count: number;
    }>;
    message?: string;
  }> {
    try {
      if (!this.api) {
        await this.initializeClient();
      }

      const params = new URLSearchParams({
        resfmt: 'JSON',
        sort: 'asc',
        fromindex: '1',
        range: '100'
      });

      const response = await this.api!.get(`/getmailinglists?${params.toString()}`);

      console.log('Zoho Campaigns lists response:', response.data);

      if (response.data) {
        const data = response.data;

        if (data.status === 'success' || data.list_of_details) {
          return {
            success: true,
            lists: data.list_of_details || []
          };
        } else {
          return {
            success: false,
            message: data.message || 'Failed to fetch mailing lists'
          };
        }
      }

      return {
        success: false,
        message: 'No response from Zoho Campaigns'
      };
    } catch (error: any) {
      console.error('Get mailing lists error:', error.response?.data || error);

      return {
        success: false,
        message: error.response?.data?.message || 'Failed to connect to Zoho Campaigns'
      };
    }
  }

  /**
   * Add contact to an existing list (bulk operation)
   */
  async addContactToList(email: string, listKey?: string, firstName?: string, lastName?: string): Promise<{
    success: boolean;
    message: string;
    isDuplicate?: boolean;
  }> {
    console.log('[ZohoCampaignsAPI] Adding contact to list:', {
      email,
      listKey: listKey || 'using default',
      hasDefaultKey: !!this.defaultListKey
    });

    try {
      // Reinitialize client for each request to ensure fresh token
      await this.initializeClient();

      const targetListKey = listKey || this.defaultListKey;

      if (!targetListKey) {
        console.error('[ZohoCampaignsAPI] No list key available');
        return {
          success: false,
          message: 'No mailing list configured. Please check your Zoho Campaigns settings.'
        };
      }

      // Use the bulk add API - works better for all email domains
      const params = new URLSearchParams({
        resfmt: 'JSON',
        listkey: targetListKey,
        emailids: email
      });

      console.log('[ZohoCampaignsAPI] Making API request to /addlistsubscribersinbulk');

      const response = await this.api!.post('/addlistsubscribersinbulk', params.toString());

      console.log('[ZohoCampaignsAPI] Response:', JSON.stringify(response.data, null, 2));

      if (response.data) {
        const data = response.data;

        // Bulk API returns success with status='success' and code='0'
        if (data.status === 'success' || data.code === '0' || data.code === 0) {
          // Check if the email was ignored (domain validation failed)
          if (data.ignored_contacts && data.ignored_contacts.includes(email)) {
            console.log('[ZohoCampaignsAPI] Email domain rejected by Zoho');
            return {
              success: false,
              message: 'Please use a valid email address from a recognized provider (Gmail, Yahoo, Outlook, etc.)'
            };
          }

          // Check if the email already exists
          if (data.existing_contacts && data.existing_contacts.includes(email)) {
            console.log('[ZohoCampaignsAPI] Contact already exists');
            return {
              success: false,
              message: 'This email is already registered in our mailing list.',
              isDuplicate: true
            };
          }

          // Successfully added
          console.log('[ZohoCampaignsAPI] Successfully added contact');
          return {
            success: true,
            message: 'Thank you! You have been successfully subscribed.'
          };
        } else {
          console.error('[ZohoCampaignsAPI] Unexpected response:', data);
          return {
            success: false,
            message: data.message || 'Unable to subscribe at this moment. Please try again later.'
          };
        }
      }

      console.error('[ZohoCampaignsAPI] No data in response');
      return {
        success: false,
        message: 'No response from email service. Please try again.'
      };
    } catch (error: any) {
      console.error('[ZohoCampaignsAPI] Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers
        }
      });

      // Handle specific error scenarios
      if (error.response?.status === 401) {
        console.error('[ZohoCampaignsAPI] Authentication failed');
        return {
          success: false,
          message: 'Authentication error. Please contact support.'
        };
      }

      if (error.response?.status === 500) {
        console.error('[ZohoCampaignsAPI] Zoho server error');
        return {
          success: false,
          message: 'Email service temporarily unavailable. Please try again later.'
        };
      }

      // Check for duplicate in error response
      if (error.response?.data?.message?.toLowerCase().includes('already') ||
          error.response?.data?.code === '2001' || error.response?.data?.code === 2001) {
        return {
          success: false,
          message: 'This email is already registered in our mailing list.',
          isDuplicate: true
        };
      }

      return {
        success: false,
        message: 'Unable to connect to email service. Please try again later.'
      };
    }
  }
}

// Export singleton instance
export const zohoCampaignsAPI = new ZohoCampaignsAPI();