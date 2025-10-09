/**
 * Zoho Field Mapping Utilities
 * Maps local Prisma enum values to actual Zoho CRM field values
 *
 * All mappings are based on ACTUAL Zoho CRM picklist values
 */

import { SalesDepartment, ProgramInterested, LeadSource, LeadStatus } from '@prisma/client';

/**
 * Map local SalesDepartment enum to Zoho Sales_Department field values
 */
export function mapSalesDepartmentToZoho(department: SalesDepartment | string): string {
  const mapping: Record<string, string> = {
    'NONE': '-None-',
    'K12': 'SEED - K12 Team',
    'UG': 'BUILD - UG Team',
    'PG': 'LEAD - Executive Team',
    'EDGE_AI_ONLINE_TEAM': 'EDGE AI - Online Team',
  };

  return mapping[department] || '-None-';
}

/**
 * Map local ProgramInterested enum to Zoho Sales_Caller field values
 */
export function mapProgramInterestedToZoho(program: ProgramInterested | string): string {
  const mapping: Record<string, string> = {
    'NONE': '-None-',
    'SRI_SAI_KOLLURU': 'Sri Sai Kolluru',
    'RAHUL_BHARADWAJ': 'Rahul Bharadwaj',
    'LEAD_VENTURE_BUILDING': 'LEAD - Venture Building',
    'LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY': 'LEAD - Venture Capital & Private Equity',
    'SEED_WEEKEND_SCHOOL': 'SEED - Weekend School',
    'SEED_SUMMER_CAMP': 'SEED - Summer Camp',
    'SEED_WINTER_CAMP': 'SEED - Winter Camp',
    'SEED_B2B': 'SEED - B2B',
    'BUILD_BBA_ENTREPRENEURSHIP': 'BUILD - BBA in Entrepreneurship',
    'BUILD_BTECH_TECHNOLOGY': 'BUILD - BTECH in Technology',
  };

  return mapping[program] || '-None-';
}

/**
 * Map local LeadSource enum to Zoho Lead_Source field values
 */
export function mapLeadSourceToZoho(source: LeadSource | string): string {
  const mapping: Record<string, string> = {
    'NONE': '-None-',
    'PERFORMANCE_MARKETING': 'Performance Marketing',
    'ADVERTISEMENT': 'Offline Advertisement',
    'COLD_CALL': 'Cold Call',
    'EMPLOYEE_REFERRAL': 'Referral',
    'EXTERNAL_REFERRAL': 'External Referral',
    'ONLINESTORE': 'Website', // Maps to Website as default
    'PARTNER': 'Referral',
    'PUBLIC_RELATIONS': 'Referral',
    'SALES_MAIL_ALIAS': 'Email Marketing',
    'SEMINAR_PARTNER': 'Webinars & Virtual Events',
    'SEMINAR_INTERNAL': 'Webinars & Virtual Events',
    'TRADE_SHOW': 'Educational Fairs & Exhibitions',
    'WEB_DOWNLOAD': 'Website',
    'WEB_RESEARCH': 'Website',
    'CHAT': 'Website Chatbot',
    'TWITTER': 'Facebook Ads',
    'FACEBOOK': 'Facebook Ads',
    'WHATSAPP_BOWER_SCHOOL': 'WhatsApp - Bower School',
    'EDUCATIONAL_FAIRS_EXHIBITIONS': 'Educational Fairs & Exhibitions',
    'PRESS_PR': 'Newspaper/Media',
    'SCHOLARSHIP_PROGRAMS': 'Scholarship Programs',
    'EDUCATIONAL_PORTALS_AGGREGATORS': 'Educational Portals & Aggregators',
    'STUDENT_ALUMNI_NETWORK': 'Student Alumni Network',
    'COMPETITIONS_CHALLENGES': 'Competitions/Challenges',
    'WORD_OF_MOUTH': 'Word of Mouth',
    'INFLUENCERS_CONTENT_CREATORS': 'Influencers/Content Creators',
  };

  return mapping[source] || 'Website'; // Default to Website
}

/**
 * Map local LeadStatus enum to Zoho Lead_Status field values
 */
export function mapLeadStatusToZoho(status: LeadStatus | string): string {
  const mapping: Record<string, string> = {
    'NONE': '-None-',
    'INTERESTED': 'Interested',
    'CONTACTED': 'Contacted',
    'CONTACT_IN_FUTURE': 'Contact in Future',
    'ATTEMPTED_TO_CONTACT': 'Attempted to Contact',
    'LOST_LEAD': 'Lost Lead',
    'NOT_INTERESTED': 'Not Interested',
    'JUNK_LEAD': 'Junk Lead',
  };

  return mapping[status] || 'Interested';
}

/**
 * Map Zoho Sales_Department field value to local SalesDepartment enum
 */
export function mapZohoToSalesDepartment(zohoValue: string): SalesDepartment {
  const mapping: Record<string, SalesDepartment> = {
    '-None-': SalesDepartment.NONE,
    'SEED - K12 Team': SalesDepartment.K12,
    'BUILD - UG Team': SalesDepartment.UG,
    'LEAD - Executive Team': SalesDepartment.PG,
    'EDGE AI - Online Team': SalesDepartment.EDGE_AI_ONLINE_TEAM,
  };

  return mapping[zohoValue] || SalesDepartment.NONE;
}

/**
 * Map Zoho Sales_Caller field value to local ProgramInterested enum
 */
export function mapZohoToProgramInterested(zohoValue: string): ProgramInterested {
  const mapping: Record<string, ProgramInterested> = {
    '-None-': ProgramInterested.NONE,
    'Sri Sai Kolluru': ProgramInterested.SRI_SAI_KOLLURU,
    'Rahul Bharadwaj': ProgramInterested.RAHUL_BHARADWAJ,
    'LEAD - Venture Building': ProgramInterested.LEAD_VENTURE_BUILDING,
    'LEAD - Venture Capital & Private Equity': ProgramInterested.LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY,
    'SEED - Weekend School': ProgramInterested.SEED_WEEKEND_SCHOOL,
    'SEED - Summer Camp': ProgramInterested.SEED_SUMMER_CAMP,
    'SEED - Winter Camp': ProgramInterested.SEED_WINTER_CAMP,
    'SEED - B2B': ProgramInterested.SEED_B2B,
    'BUILD - BBA in Entrepreneurship': ProgramInterested.BUILD_BBA_ENTREPRENEURSHIP,
    'BUILD - BTECH in Technology': ProgramInterested.BUILD_BTECH_TECHNOLOGY,
  };

  return mapping[zohoValue] || ProgramInterested.NONE;
}

/**
 * Map Zoho Lead_Source field value to local LeadSource enum
 */
export function mapZohoToLeadSource(zohoValue: string): LeadSource {
  const mapping: Record<string, LeadSource> = {
    '-None-': LeadSource.NONE,
    'Performance Marketing': LeadSource.PERFORMANCE_MARKETING,
    'Offline Advertisement': LeadSource.ADVERTISEMENT,
    'Cold Call': LeadSource.COLD_CALL,
    'Referral': LeadSource.EXTERNAL_REFERRAL,
    'External Referral': LeadSource.EXTERNAL_REFERRAL,
    'Website': LeadSource.ONLINESTORE,
    'Online Store': LeadSource.ONLINESTORE,
    'Website Chatbot': LeadSource.CHAT,
    'WhatsApp Campaigns': LeadSource.WHATSAPP_BOWER_SCHOOL,
    'Instagram Ads': LeadSource.FACEBOOK,
    'Facebook Ads': LeadSource.FACEBOOK,
    'LinkedIn Campaigns': LeadSource.EXTERNAL_REFERRAL,
    'YouTube Ads': LeadSource.FACEBOOK,
    'Email Marketing': LeadSource.SALES_MAIL_ALIAS,
    'Google Ads': LeadSource.PERFORMANCE_MARKETING,
    'Counselor/School Referrals': LeadSource.EXTERNAL_REFERRAL,
    'Webinars & Virtual Events': LeadSource.SEMINAR_INTERNAL,
    'Masterclass/Guest Talks': LeadSource.SEMINAR_INTERNAL,
    'Educational Fairs & Exhibitions': LeadSource.EDUCATIONAL_FAIRS_EXHIBITIONS,
    'Newspaper/Media': LeadSource.PRESS_PR,
    'Scholarship Programs': LeadSource.SCHOLARSHIP_PROGRAMS,
    'Educational Portals & Aggregators': LeadSource.EDUCATIONAL_PORTALS_AGGREGATORS,
    'Student Alumni Network': LeadSource.STUDENT_ALUMNI_NETWORK,
    'Competitions/Challenges': LeadSource.COMPETITIONS_CHALLENGES,
    'Word of Mouth': LeadSource.WORD_OF_MOUTH,
    'Influencers/Content Creators': LeadSource.INFLUENCERS_CONTENT_CREATORS,
    'WhatsApp - Bower School': LeadSource.WHATSAPP_BOWER_SCHOOL,
  };

  return mapping[zohoValue] || LeadSource.ONLINESTORE;
}

/**
 * Map Zoho Lead_Status field value to local LeadStatus enum
 */
export function mapZohoToLeadStatus(zohoValue: string): LeadStatus {
  const mapping: Record<string, LeadStatus> = {
    '-None-': LeadStatus.NONE,
    'Interested': LeadStatus.INTERESTED,
    'Contacted': LeadStatus.CONTACTED,
    'Contact in Future': LeadStatus.CONTACT_IN_FUTURE,
    'Attempted to Contact': LeadStatus.ATTEMPTED_TO_CONTACT,
    'Lost Lead': LeadStatus.LOST_LEAD,
    'Not Interested': LeadStatus.NOT_INTERESTED,
    'Junk Lead': LeadStatus.JUNK_LEAD,
  };

  return mapping[zohoValue] || LeadStatus.INTERESTED;
}

/**
 * Get human-readable label for Sales Department (Zoho format)
 */
export function getSalesDepartmentZohoLabel(department: SalesDepartment | string): string {
  return mapSalesDepartmentToZoho(department);
}

/**
 * Get human-readable label for Program Interested (Zoho format)
 */
export function getProgramInterestedZohoLabel(program: ProgramInterested | string): string {
  return mapProgramInterestedToZoho(program);
}
