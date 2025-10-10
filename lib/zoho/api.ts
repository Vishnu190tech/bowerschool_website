import axios, { AxiosInstance, AxiosError } from 'axios';
import { getValidAccessToken, checkZohoConnection } from './oauth';
import { prisma } from '@/lib/prisma';
import {
  ZohoLead,
  ZohoLeadResponse,
  ZohoAPIError,
  LeadFormData,
  Lead,
  LeadSyncResult,
  ApiMethod,
  DuplicateInfo,
  ScholarshipFormData
} from './types';
import { parseDuplicateError, extractZohoIdFromError } from './duplicate-utils';
import {
  mapSalesDepartmentToZoho,
  mapProgramInterestedToZoho,
  mapLeadSourceToZoho,
  mapLeadStatusToZoho
} from '@/lib/utils/zoho-field-mapping';

class ZohoAPIService {
  private api: AxiosInstance | null = null;

  /**
   * Initialize the API client with the current access token
   */
  private async initializeClient(): Promise<void> {
    const accessToken = await getValidAccessToken();

    if (!accessToken) {
      throw new Error('No valid access token available');
    }

    // Get the API domain from stored credentials
    const credentials = await prisma.zohoCredential.findFirst({
      where: { isActive: true }
    });

    if (!credentials || !credentials.apiDomain) {
      throw new Error('API domain not configured');
    }

    this.api = axios.create({
      baseURL: `${credentials.apiDomain}/crm/v2`,
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Token might be expired, try to refresh
          console.log('Token expired, attempting refresh...');
          await this.initializeClient();
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Make an API request to Zoho CRM
   */
  private async makeRequest<T>(
    method: ApiMethod,
    endpoint: string,
    data?: any
  ): Promise<T> {
    if (!this.api) {
      await this.initializeClient();
    }

    try {
      const response = await this.api!.request({
        method,
        url: endpoint,
        data
      });

      return response.data;
    } catch (error) {
      console.error('Zoho API request error:', error);
      throw error;
    }
  }

  /**
   * Create a new lead in Zoho CRM
   */
  async createLead(leadData: LeadFormData): Promise<LeadSyncResult> {
    try {
      // Prepare Zoho lead data
      const zohoLead: ZohoLead = {
        First_Name: leadData.firstName,
        Last_Name: leadData.lastName,
        Email: leadData.email,
        Phone: leadData.phone,
        Company: leadData.company || 'Individual',
        Lead_Source: leadData.source || 'Website',
        Description: leadData.message,
        Lead_Status: 'New'
      };

      // Make API request to create lead
      const response = await this.makeRequest<ZohoLeadResponse>(
        'POST',
        '/Leads',
        {
          data: [zohoLead],
          trigger: ['approval', 'workflow', 'blueprint']
        }
      );

      // Check response
      if (response.data && response.data[0]) {
        const result = response.data[0];

        if (result.status === 'success') {
          return {
            leadId: '',
            zohoLeadId: result.details.id,
            status: 'success',
            timestamp: new Date()
          };
        } else {
          // Check if it's a duplicate error
          const errorString = JSON.stringify(result);
          const duplicateInfo = parseDuplicateError(errorString);
          const zohoLeadId = extractZohoIdFromError(result);

          return {
            leadId: '',
            status: 'failed',
            error: errorString,
            timestamp: new Date(),
            duplicateInfo: duplicateInfo.isDuplicate ? { ...duplicateInfo, zohoLeadId: zohoLeadId || duplicateInfo.zohoLeadId } : undefined
          };
        }
      }

      throw new Error('Invalid response from Zoho API');
    } catch (error) {
      console.error('Create lead error:', error);

      // Check if error response contains duplicate info
      const errorData = (error as any)?.response?.data?.data?.[0];
      if (errorData) {
        const errorString = JSON.stringify(errorData);
        const duplicateInfo = parseDuplicateError(errorString);
        const zohoLeadId = extractZohoIdFromError(errorData);

        if (duplicateInfo.isDuplicate) {
          return {
            leadId: '',
            status: 'failed',
            error: errorString,
            timestamp: new Date(),
            duplicateInfo: { ...duplicateInfo, zohoLeadId: zohoLeadId || duplicateInfo.zohoLeadId }
          };
        }
      }

      return {
        leadId: '',
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date()
      };
    }
  }

  /**
   * Update an existing lead in Zoho CRM
   */
  async updateLead(zohoLeadId: string, updateData: Partial<ZohoLead>): Promise<boolean> {
    try {
      const response = await this.makeRequest<ZohoLeadResponse>(
        'PUT',
        `/Leads/${zohoLeadId}`,
        {
          data: [updateData]
        }
      );

      return response.data[0]?.status === 'success';
    } catch (error) {
      console.error('Update lead error:', error);
      return false;
    }
  }

  /**
   * Get a lead from Zoho CRM
   */
  async getLead(zohoLeadId: string): Promise<any | null> {
    try {
      const response = await this.makeRequest<any>(
        'GET',
        `/Leads/${zohoLeadId}`
      );

      // Check if response has data and it's an array
      if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0];
      }

      console.error('Invalid response structure from Zoho API:', response);
      return null;
    } catch (error) {
      console.error('Get lead error:', error);
      return null;
    }
  }

  /**
   * Search for leads in Zoho CRM
   */
  async searchLeads(criteria: string): Promise<any[]> {
    try {
      const response = await this.makeRequest<any>(
        'GET',
        `/Leads/search?criteria=${encodeURIComponent(criteria)}`
      );

      return response.data || [];
    } catch (error) {
      console.error('Search leads error:', error);
      return [];
    }
  }

  /**
   * Search for a lead by email in Zoho CRM
   */
  async searchLeadByEmail(email: string): Promise<any | null> {
    try {
      const criteria = `(Email:equals:${email})`;
      const leads = await this.searchLeads(criteria);

      return leads.length > 0 ? leads[0] : null;
    } catch (error) {
      console.error('Search lead by email error:', error);
      return null;
    }
  }

  /**
   * Resolve duplicate lead by updating local database with Zoho ID
   */
  async resolveDuplicateLead(localLeadId: string, zohoLeadId: string): Promise<{
    success: boolean;
    lead?: Lead;
    error?: string;
  }> {
    try {
      // First, verify the Zoho lead exists
      const zohoLead = await this.getLead(zohoLeadId);

      if (!zohoLead) {
        return {
          success: false,
          error: 'Zoho lead not found with the provided ID'
        };
      }

      // Update local lead with Zoho ID and mark as synced
      const updatedLead = await prisma.lead.update({
        where: { id: localLeadId },
        data: {
          zohoLeadId: zohoLeadId,
          syncStatus: 'synced',
          syncError: null,
          lastSyncAt: new Date()
        }
      });

      // Create a success sync log
      await prisma.zohoSyncLog.create({
        data: {
          leadId: localLeadId,
          action: 'resolve_duplicate',
          status: 'success',
          response: {
            zohoLeadId,
            resolvedAt: new Date(),
            zohoLeadData: {
              email: zohoLead.Email,
              firstName: zohoLead.First_Name,
              lastName: zohoLead.Last_Name
            }
          }
        }
      });

      return {
        success: true,
        lead: updatedLead
      };
    } catch (error) {
      console.error('Resolve duplicate lead error:', error);

      // Log the error
      await prisma.zohoSyncLog.create({
        data: {
          leadId: localLeadId,
          action: 'resolve_duplicate',
          status: 'failed',
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      });

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Save lead to local database ONLY (does NOT sync to Zoho automatically)
   * Use manual sync or create form to push to Zoho when ready
   */
  async saveAndSyncLead(leadData: LeadFormData): Promise<{
    lead: any; // Will use Prisma generated type
    syncResult: LeadSyncResult;
  }> {
    // Save to local database ONLY - NO automatic Zoho sync
    const lead = await prisma.lead.create({
      data: {
        // Required fields
        lastName: leadData.lastName,
        email: leadData.email,
        leadSource: leadData.leadSource as any, // Prisma enum

        // Basic Contact
        firstName: leadData.firstName,
        salutation: leadData.salutation as any,
        phone: leadData.phone,
        mobile: leadData.mobile,
        secondaryEmail: leadData.secondaryEmail,

        // Status
        leadStatus: (leadData.leadStatus as any) || 'INTERESTED',
        leadSubStatus: leadData.leadSubStatus as any,

        // Student Information
        grade: leadData.grade as any,
        board: leadData.board as any,
        academicStream: leadData.academicStream as any,
        gender: leadData.gender as any,
        birthday: leadData.birthday,
        schoolInstitution: leadData.schoolInstitution,

        // Parent/Guardian
        parentGuardianName: leadData.parentGuardianName,
        parentGuardianEmail: leadData.parentGuardianEmail,
        parentGuardianPhone: leadData.parentGuardianPhone,
        relationshipToStudent: leadData.relationshipToStudent,
        occupation: leadData.occupation,

        // Referral
        referrerName: leadData.referrerName,
        referrerEmail: leadData.referrerEmail,
        referrerPhone: leadData.referrerPhone,
        referralCode: leadData.referralCode,

        // Sales & Program
        salesDepartment: leadData.salesDepartment as any,
        programInterested: leadData.programInterested as any,

        // Marketing & UTM
        utmSource: leadData.utmSource,
        utmMedium: leadData.utmMedium,
        utmCampaign: leadData.utmCampaign,
        utmContent: leadData.utmContent,
        utmTerm: leadData.utmTerm,
        otherSource: leadData.otherSource,

        // Address
        street: leadData.street,
        city: leadData.city,
        state: leadData.state,
        zipCode: leadData.zipCode,
        country: leadData.country,

        // Communication
        emailOptOut: leadData.emailOptOut || false,
        whatsappOptOut: leadData.whatsappOptOut || false,

        // Description
        description: leadData.description,

        // Qualification
        qualificationScore: leadData.qualificationScore || 0,
        engagementScore: leadData.engagementScore || 0,

        // Sync status - keep as pending, manual sync later
        syncStatus: 'pending'
      }
    });

    // NO AUTOMATIC ZOHO SYNC - Just save locally
    // Log that lead was saved locally only
    await prisma.zohoSyncLog.create({
      data: {
        leadId: lead.id,
        action: 'create_local',
        status: 'pending',
        error: 'Saved locally only - manual Zoho sync required'
      }
    });

    return {
      lead,
      syncResult: {
        leadId: lead.id,
        status: 'failed', // Not synced yet
        error: 'Lead saved locally only - use manual sync to push to Zoho',
        timestamp: new Date()
      }
    };
  }

  /**
   * Bulk create leads in Zoho CRM
   */
  async bulkCreateLeads(leads: LeadFormData[]): Promise<LeadSyncResult[]> {
    const results: LeadSyncResult[] = [];

    for (const leadData of leads) {
      const result = await this.createLead(leadData);
      results.push(result);
    }

    return results;
  }

  /**
   * Sync all pending leads to Zoho
   */
  async syncPendingLeads(): Promise<{
    synced: number;
    failed: number;
    results: LeadSyncResult[];
  }> {
    const pendingLeads = await prisma.lead.findMany({
      where: {
        syncStatus: 'pending'
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    const results: LeadSyncResult[] = [];
    let synced = 0;
    let failed = 0;

    for (const lead of pendingLeads) {
      const leadData: LeadFormData = {
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone || undefined,
        company: lead.company || undefined,
        message: lead.message || undefined,
        source: lead.source,
        leadSource: lead.leadSource || undefined
      };

      const syncResult = await this.createLead(leadData);

      if (syncResult.status === 'success' && syncResult.zohoLeadId) {
        await prisma.lead.update({
          where: { id: lead.id },
          data: {
            zohoLeadId: syncResult.zohoLeadId,
            syncStatus: 'synced',
            lastSyncAt: new Date()
          }
        });

        await prisma.zohoSyncLog.create({
          data: {
            leadId: lead.id,
            action: 'sync',
            status: 'success',
            response: { zohoLeadId: syncResult.zohoLeadId }
          }
        });

        synced++;
      } else {
        await prisma.lead.update({
          where: { id: lead.id },
          data: {
            syncStatus: 'failed',
            syncError: syncResult.error,
            syncAttempts: { increment: 1 }
          }
        });

        await prisma.zohoSyncLog.create({
          data: {
            leadId: lead.id,
            action: 'sync',
            status: 'failed',
            error: syncResult.error
          }
        });

        failed++;
      }

      results.push({ ...syncResult, leadId: lead.id });
    }

    return { synced, failed, results };
  }

  /**
   * Create or update lead from scholarship form with duplicate checking
   */
  async processScholarshipFormLead(
    formData: ScholarshipFormData,
    salesDepartment: string,
    programInterested: string,
    confirmUpdate: boolean = false
  ): Promise<LeadSyncResult> {
    try {
      // First, check if lead exists by email
      const existingZohoLead = await this.searchLeadByEmail(formData.email);

      if (existingZohoLead && !confirmUpdate) {
        // Lead exists and we don't have confirmation to update
        return {
          leadId: '',
          zohoLeadId: existingZohoLead.id,
          status: 'duplicate_found',
          requiresConfirmation: true,
          existingLead: {
            First_Name: existingZohoLead.First_Name,
            Last_Name: existingZohoLead.Last_Name,
            Email: existingZohoLead.Email,
            Mobile: existingZohoLead.Phone || existingZohoLead.Mobile, // Use Phone field first, fallback to Mobile
            Lead_Status: existingZohoLead.Lead_Status,
            Sales_Department: existingZohoLead.Sales_Department,
            Sales_Caller: existingZohoLead.Sales_Caller,
          },
          timestamp: new Date()
        };
      }

      // Parse name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || nameParts[0]; // Use first name as last if only one name

      // Map local enum values to Zoho field values
      const zohoSalesDepartment = mapSalesDepartmentToZoho(salesDepartment);
      const zohoProgramInterested = mapProgramInterestedToZoho(programInterested);

      console.log('🔄 Mapping to Zoho values:', {
        localSalesDepartment: salesDepartment,
        zohoSalesDepartment,
        localProgramInterested: programInterested,
        zohoProgramInterested
      });

      // Map LeadSource to Zoho values (using actual database enum values)
      const zohoLeadSource = mapLeadSourceToZoho('ONLINESTORE'); // Website
      // Note: leadStatus is intentionally left empty as per requirement

      // Prepare Zoho lead data
      const zohoLead: Partial<ZohoLead> = {
        First_Name: firstName,
        Last_Name: lastName,
        Email: formData.email,
        Phone: formData.mobile, // Send mobile number to Phone field instead of Mobile
        Lead_Source: zohoLeadSource, // Use mapped Zoho value for website
        // Lead_Status: empty as per requirement
        Sales_Department: zohoSalesDepartment, // Use mapped Zoho value
        Sales_Caller: zohoProgramInterested, // Use mapped Zoho value for Program Interested
        Email_Opt_Out: !formData.consent,
        Description: `Lead from scholarship form on ${formData.page} page`,

        // Add UTM parameters if available
        utm_source: formData.utmParams?.utmSource,
        utm_medium: formData.utmParams?.utmMedium,
        utm_campaign: formData.utmParams?.utmCampaign,
        utm_content: formData.utmParams?.utmContent,
        utm_term: formData.utmParams?.utmTerm,
        Other_Source: formData.utmParams?.referrer,
        Referral_Code: formData.utmParams?.referralCode,

        // Add referrer contact information if available
        Referrer_Name: formData.utmParams?.referrerName,
        Referrer_Email: formData.utmParams?.referrerEmail,
        Referrer_Phone1: formData.utmParams?.referrerPhone,
      };

      let result: LeadSyncResult;

      if (existingZohoLead && confirmUpdate) {
        // Update existing lead
        const updateSuccess = await this.updateLead(existingZohoLead.id, zohoLead);

        if (updateSuccess) {
          result = {
            leadId: '',
            zohoLeadId: existingZohoLead.id,
            status: 'success',
            timestamp: new Date()
          };
        } else {
          result = {
            leadId: '',
            status: 'failed',
            error: 'Failed to update existing lead in Zoho',
            timestamp: new Date()
          };
        }
      } else {
        // Create new lead
        const response = await this.makeRequest<ZohoLeadResponse>(
          'POST',
          '/Leads',
          {
            data: [zohoLead],
            trigger: ['approval', 'workflow', 'blueprint']
          }
        );

        if (response.data && response.data[0] && response.data[0].status === 'success') {
          result = {
            leadId: '',
            zohoLeadId: response.data[0].details.id,
            status: 'success',
            timestamp: new Date()
          };
        } else {
          result = {
            leadId: '',
            status: 'failed',
            error: 'Failed to create lead in Zoho',
            timestamp: new Date()
          };
        }
      }

      return result;
    } catch (error) {
      console.error('Process scholarship form lead error:', error);
      return {
        leadId: '',
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date()
      };
    }
  }

  /**
   * Save scholarship form lead to database
   */
  async saveScholarshipFormToDatabase(
    formData: ScholarshipFormData,
    salesDepartment: string,
    programInterested: string,
    zohoLeadId?: string
  ): Promise<Lead> {
    // Parse name
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || nameParts[0];

    // Save to database using the actual database enum values
    const lead = await prisma.lead.create({
      data: {
        firstName,
        lastName,
        email: formData.email,
        mobile: formData.mobile,
        leadSource: 'ONLINESTORE', // Use actual database enum value
        // leadStatus: intentionally left empty as per requirement
        salesDepartment: salesDepartment as any,
        programInterested: programInterested as any,
        emailOptOut: !formData.consent,
        description: `Lead from scholarship form on ${formData.page} page`,

        // UTM tracking
        utmSource: formData.utmParams?.utmSource,
        utmMedium: formData.utmParams?.utmMedium,
        utmCampaign: formData.utmParams?.utmCampaign,
        utmContent: formData.utmParams?.utmContent,
        utmTerm: formData.utmParams?.utmTerm,
        otherSource: formData.utmParams?.referrer,
        referralCode: formData.utmParams?.referralCode,

        // Referrer information
        referrerName: formData.utmParams?.referrerName,
        referrerEmail: formData.utmParams?.referrerEmail,
        referrerPhone: formData.utmParams?.referrerPhone,

        // Zoho sync
        zohoLeadId: zohoLeadId,
        syncStatus: zohoLeadId ? 'synced' : 'pending',
        lastSyncAt: zohoLeadId ? new Date() : null,
      }
    });

    return lead as any;
  }

  /**
   * Get field metadata from Zoho CRM
   */
  async getFieldMetadata(module: string = 'Leads'): Promise<any[]> {
    try {
      await this.initializeClient();
      const response = await this.makeRequest<any>('GET', `/settings/fields?module=${module}`);
      return response.fields || [];
    } catch (error) {
      console.error('Get field metadata error:', error);
      return [];
    }
  }

  /**
   * Get picklist values for a specific field
   */
  async getPicklistValues(fieldName: string, module: string = 'Leads'): Promise<string[]> {
    try {
      const fields = await this.getFieldMetadata(module);
      const field = fields.find(f => f.api_name === fieldName);

      if (field && field.pick_list_values) {
        return field.pick_list_values
          .filter((item: any) => item.actual_value)
          .map((item: any) => item.actual_value);
      }

      return [];
    } catch (error) {
      console.error('Get picklist values error:', error);
      return [];
    }
  }

  /**
   * Get Sales Department options from Zoho
   */
  async getSalesDepartmentOptions(): Promise<string[]> {
    try {
      const values = await this.getPicklistValues('Sales_Department');
      console.log('📋 Sales Department options from Zoho:', values);
      return values;
    } catch (error) {
      console.error('Get Sales Department options error:', error);
      return [];
    }
  }

  /**
   * Get Program Interested (Sales_Caller) options from Zoho
   */
  async getProgramInterestedOptions(): Promise<string[]> {
    try {
      const values = await this.getPicklistValues('Sales_Caller');
      console.log('📋 Program Interested (Sales_Caller) options from Zoho:', values);
      return values;
    } catch (error) {
      console.error('Get Program Interested options error:', error);
      return [];
    }
  }

  /**
   * Test the Zoho API connection
   */
  async testConnection(): Promise<{
    success: boolean;
    message: string;
    details?: any;
  }> {
    try {
      await this.initializeClient();

      // Try to get modules list as a test
      const response = await this.makeRequest<any>('GET', '/settings/modules');

      return {
        success: true,
        message: 'Successfully connected to Zoho CRM',
        details: {
          modules: response.modules?.map((m: any) => m.api_name) || []
        }
      };
    } catch (error) {
      console.error('Test connection error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Connection failed'
      };
    }
  }
}

// Export singleton instance
export const zohoAPI = new ZohoAPIService();