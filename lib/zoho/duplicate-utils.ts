import { DuplicateInfo } from './types';

/**
 * Check if a sync error indicates a duplicate lead
 */
export function isDuplicateError(syncError: string | null): boolean {
  if (!syncError) return false;

  try {
    const errorData = JSON.parse(syncError);
    return errorData.code === 'DUPLICATE_DATA' ||
           syncError.toLowerCase().includes('duplicate');
  } catch {
    return syncError.toLowerCase().includes('duplicate');
  }
}

/**
 * Parse duplicate error to extract Zoho Lead ID and other info
 */
export function parseDuplicateError(syncError: string | null): DuplicateInfo {
  const defaultResult: DuplicateInfo = { isDuplicate: false };

  if (!syncError) return defaultResult;

  try {
    const errorData = JSON.parse(syncError);

    if (errorData.code === 'DUPLICATE_DATA') {
      return {
        isDuplicate: true,
        zohoLeadId: errorData.details?.id,
        message: errorData.message || 'Duplicate data detected',
        detectedAt: new Date()
      };
    }

    // Check if error message contains duplicate info
    if (errorData.message?.toLowerCase().includes('duplicate')) {
      return {
        isDuplicate: true,
        message: errorData.message,
        detectedAt: new Date()
      };
    }
  } catch {
    // If not JSON, check plain text
    if (syncError.toLowerCase().includes('duplicate')) {
      return {
        isDuplicate: true,
        message: syncError,
        detectedAt: new Date()
      };
    }
  }

  return defaultResult;
}

/**
 * Format duplicate information for display
 */
export function formatDuplicateInfo(duplicateInfo: DuplicateInfo): string {
  if (!duplicateInfo.isDuplicate) return '';

  let message = duplicateInfo.message || 'Duplicate lead detected';

  if (duplicateInfo.zohoLeadId) {
    message += ` (Zoho ID: ${duplicateInfo.zohoLeadId})`;
  }

  return message;
}

/**
 * Generate Zoho CRM lead URL
 */
export function getZohoCRMLeadUrl(zohoLeadId: string, apiDomain: string): string {
  // Convert API domain to CRM domain
  // https://www.zohoapis.in -> https://crm.zoho.in
  const crmDomain = apiDomain
    .replace('www.zohoapis.', 'crm.zoho.')
    .replace('www.zohoapis.', 'crm.zoho.');

  return `${crmDomain}/crm/EntityInfo?module=Leads&id=${zohoLeadId}`;
}

/**
 * Validate Zoho Lead ID format
 */
export function isValidZohoLeadId(zohoLeadId: string): boolean {
  // Zoho IDs are typically 18-19 digit numbers
  return /^\d{15,20}$/.test(zohoLeadId);
}

/**
 * Extract Zoho ID from various error formats
 */
export function extractZohoIdFromError(error: any): string | null {
  if (!error) return null;

  try {
    // If error is a string, try to parse it
    const errorData = typeof error === 'string' ? JSON.parse(error) : error;

    // Check standard Zoho duplicate error format
    if (errorData.details?.id) {
      return errorData.details.id;
    }

    // Check if ID is in the message
    const idMatch = errorData.message?.match(/id[:\s]+(\d{15,20})/i);
    if (idMatch) {
      return idMatch[1];
    }
  } catch {
    // If parsing fails, try regex on the string
    if (typeof error === 'string') {
      const idMatch = error.match(/id[:\s]+(\d{15,20})/i);
      if (idMatch) {
        return idMatch[1];
      }
    }
  }

  return null;
}
