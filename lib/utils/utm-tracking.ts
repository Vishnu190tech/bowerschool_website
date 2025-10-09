/**
 * UTM Tracking Utilities
 * Extracts and manages UTM parameters and referral information from URLs
 */

export interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  referralCode?: string;
  referrerName?: string;
  referrerEmail?: string;
  referrerPhone?: string;
}

/**
 * Extract UTM parameters from URL search params
 */
export function extractUTMParams(searchParams: URLSearchParams): UTMParams {
  const params: UTMParams = {};

  // Standard UTM parameters
  const utmSource = searchParams.get('utm_source');
  const utmMedium = searchParams.get('utm_medium');
  const utmCampaign = searchParams.get('utm_campaign');
  const utmContent = searchParams.get('utm_content');
  const utmTerm = searchParams.get('utm_term');

  // Referral parameters
  const referrer = searchParams.get('ref') || searchParams.get('referrer');
  const referralCode = searchParams.get('referral_code') || searchParams.get('code');
  const referrerName = searchParams.get('referrer_name');
  const referrerEmail = searchParams.get('referrer_email');
  const referrerPhone = searchParams.get('referrer_phone');

  // Only add if they exist
  if (utmSource) params.utmSource = utmSource;
  if (utmMedium) params.utmMedium = utmMedium;
  if (utmCampaign) params.utmCampaign = utmCampaign;
  if (utmContent) params.utmContent = utmContent;
  if (utmTerm) params.utmTerm = utmTerm;
  if (referrer) params.referrer = referrer;
  if (referralCode) params.referralCode = referralCode;
  if (referrerName) params.referrerName = referrerName;
  if (referrerEmail) params.referrerEmail = referrerEmail;
  if (referrerPhone) params.referrerPhone = referrerPhone;

  return params;
}

/**
 * Get UTM parameters from the current browser URL
 */
export function getUTMParamsFromURL(): UTMParams {
  if (typeof window === 'undefined') {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);
  return extractUTMParams(searchParams);
}

/**
 * Store UTM parameters in sessionStorage for persistence
 */
export function storeUTMParams(params: UTMParams): void {
  if (typeof window === 'undefined' || !params) {
    return;
  }

  const existingParams = getStoredUTMParams();
  const mergedParams = { ...existingParams, ...params };

  sessionStorage.setItem('utm_params', JSON.stringify(mergedParams));
}

/**
 * Retrieve stored UTM parameters from sessionStorage
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error parsing stored UTM params:', error);
    return {};
  }
}

/**
 * Get UTM parameters - first check URL, then sessionStorage
 */
export function getAllUTMParams(): UTMParams {
  const urlParams = getUTMParamsFromURL();

  // If we have URL params, store them and return
  if (Object.keys(urlParams).length > 0) {
    storeUTMParams(urlParams);
    return urlParams;
  }

  // Otherwise, return stored params
  return getStoredUTMParams();
}

/**
 * Clear stored UTM parameters
 */
export function clearStoredUTMParams(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('utm_params');
  }
}

/**
 * Format UTM parameters for database storage
 */
export function formatUTMForDatabase(params: UTMParams) {
  return {
    utmSource: params.utmSource || null,
    utmMedium: params.utmMedium || null,
    utmCampaign: params.utmCampaign || null,
    utmContent: params.utmContent || null,
    utmTerm: params.utmTerm || null,
    referralCode: params.referralCode || null,
    otherSource: params.referrer || null, // Maps to Zoho's otherSource field
    referrerName: params.referrerName || null,
    referrerEmail: params.referrerEmail || null,
    referrerPhone: params.referrerPhone || null,
  };
}