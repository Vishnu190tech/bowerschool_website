// Zoho OAuth Types
export interface ZohoOAuthTokenResponse {
  access_token: string;
  refresh_token?: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

export interface ZohoOAuthErrorResponse {
  error: string;
}

export interface ZohoCredentialData {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scope: string[];
  accountsUrl: string;
}

export interface StoredZohoCredential {
  id: string;
  clientId: string; // Encrypted
  clientSecret: string; // Encrypted
  accessToken: string | null; // Encrypted
  refreshToken: string | null; // Encrypted
  tokenExpiresAt: Date | null;
  redirectUri: string;
  scope: string[];
  accountsUrl: string;
  apiDomain: string | null;
  isActive: boolean;
  lastSyncAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// Zoho CRM Lead Types (for reading from Zoho API)
export interface ZohoLead {
  // Required
  Last_Name: string;
  Email?: string;

  // Basic Contact
  First_Name?: string;
  Salutation?: string;
  Phone?: string;
  Mobile?: string;
  Secondary_Email?: string;

  // Status
  Lead_Source?: string;
  Lead_Status?: string;
  Lead_Sub_Stage?: string;

  // Student Information
  Grade?: string;
  Board?: string;
  Academic_Streams?: string;
  Gender?: string;
  Birthday?: string;
  School_Institution?: string;

  // Parent/Guardian
  Parent_Guardian_Name?: string;
  Parent_Guardian_Email?: string;
  Parent_Guardian_Phone?: string;
  Relationship_to_Student?: string;
  Occupation?: string;

  // Referral
  Referrer_Name?: string;
  Referrer_Email?: string;
  Referrer_Phone1?: string;
  Referral_Code?: string;

  // Sales & Program
  Sales_Department?: string;
  Sales_Caller?: string; // Program Interested

  // Marketing & UTM
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  Other_Source?: string;

  // Address
  Street?: string;
  City?: string;
  State?: string;
  Zip_Code?: string;
  Country?: string;

  // Communication
  Email_Opt_Out?: boolean;
  Whatsapp_Opt_Out?: boolean;

  // Description
  Description?: string;

  // System fields (read-only from Zoho)
  id?: string;
  Created_Time?: string;
  Modified_Time?: string;
  Created_By?: any;
  Modified_By?: any;
}

export interface ZohoLeadResponse {
  data: Array<{
    code: string;
    details: {
      id: string;
      Created_By: {
        id: string;
        name: string;
      };
      Created_Time: string;
      Modified_Time: string;
    };
    message: string;
    status: string;
  }>;
}

export interface ZohoAPIError {
  code: string;
  details: {
    id?: string; // Zoho Lead ID when duplicate is detected
    api_name?: string;
    [key: string]: any;
  };
  message: string;
  status: string;
}

export interface DuplicateInfo {
  isDuplicate: boolean;
  zohoLeadId?: string;
  message?: string;
  detectedAt?: Date;
}

// Application Lead Types
export interface LeadFormData {
  // Required
  lastName: string;
  email: string;
  leadSource: string; // Enum value from Prisma (e.g., "WEBSITE")

  // Basic Contact
  firstName?: string;
  salutation?: string; // Enum: Salutation
  phone?: string;
  mobile?: string;
  secondaryEmail?: string;

  // Status
  leadStatus?: string; // Enum: LeadStatus
  leadSubStatus?: string; // Enum: LeadSubStatus

  // Student Information
  grade?: string; // Enum: Grade
  board?: string; // Enum: Board
  academicStream?: string; // Enum: AcademicStream
  gender?: string; // Enum: Gender
  birthday?: Date;
  schoolInstitution?: string;

  // Parent/Guardian
  parentGuardianName?: string;
  parentGuardianEmail?: string;
  parentGuardianPhone?: string;
  relationshipToStudent?: string;
  occupation?: string;

  // Referral
  referrerName?: string;
  referrerEmail?: string;
  referrerPhone?: string;
  referralCode?: string;

  // Sales & Program
  salesDepartment?: string; // Enum: SalesDepartment
  programInterested?: string; // Enum: ProgramInterested

  // Marketing & UTM
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  otherSource?: string;

  // Address
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;

  // Communication Preferences
  emailOptOut?: boolean;
  whatsappOptOut?: boolean;

  // Description
  description?: string;

  // Qualification (internal use)
  qualificationScore?: number;
  engagementScore?: number;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  source: string;
  leadSource: string | null;
  zohoLeadId: string | null;
  syncStatus: 'pending' | 'synced' | 'failed';
  syncError: string | null;
  syncAttempts: number;
  lastSyncAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ZohoSyncLog {
  id: string;
  leadId: string;
  action: string;
  status: string;
  request: any | null;
  response: any | null;
  error: string | null;
  httpStatus: number | null;
  createdAt: Date;
}

// OAuth State Types
export interface OAuthState {
  state: string;
  timestamp: number;
  adminId?: string;
}

// Scholarship Form Types
export interface ScholarshipFormData {
  name: string;
  email: string;
  mobile: string;
  consent: boolean;
  page?: string; // Which page the form was submitted from
  utmParams?: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
    referrer?: string;
    referralCode?: string;
  };
  confirmUpdate?: boolean; // For confirming duplicate updates
  zohoLeadId?: string; // For updating existing leads
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ZohoConnectionStatus {
  isConnected: boolean;
  hasValidToken: boolean;
  tokenExpiresAt?: Date;
  lastSyncAt?: Date;
  error?: string;
}

export interface LeadSyncResult {
  leadId: string;
  zohoLeadId?: string;
  status: 'success' | 'failed' | 'duplicate_found';
  error?: string;
  timestamp: Date;
  duplicateInfo?: DuplicateInfo;
  requiresConfirmation?: boolean;
  existingLead?: Partial<ZohoLead>; // Existing lead data for comparison
}

export interface LeadWithDetails extends Lead {
  syncLogs: ZohoSyncLog[];
  duplicateInfo?: DuplicateInfo;
}

// Zoho Scope Constants
export const ZOHO_SCOPES = [
  'ZohoCRM.modules.leads.ALL',
  'ZohoCRM.modules.contacts.ALL',
  'ZohoCRM.settings.ALL',
  'ZohoCampaigns.contact.ALL',
  'ZohoCampaigns.campaign.ALL'
] as const;

export type ZohoScope = typeof ZOHO_SCOPES[number];

// Sync Status Types
export type SyncStatus = 'pending' | 'synced' | 'failed';

// OAuth Grant Types
export type GrantType = 'authorization_code' | 'refresh_token';

// API Method Types
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Module Types
export type ZohoModule = 'Leads' | 'Contacts' | 'Accounts' | 'Deals';

// Field Types for Dynamic Mapping
export interface FieldMapping {
  localField: string;
  zohoField: string;
  required: boolean;
  transform?: (value: any) => any;
}