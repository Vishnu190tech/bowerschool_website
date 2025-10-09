/**
 * Program Mapping Utilities
 * Maps pages to Sales Departments and Program Interested values
 */

import { SalesDepartment, ProgramInterested } from '@prisma/client';

export interface ProgramMapping {
  salesDepartment: SalesDepartment;
  programInterested: ProgramInterested;
}

/**
 * Map page identifier to Sales Department
 */
export function getPageSalesDepartment(page: string): SalesDepartment {
  const mappings: Record<string, SalesDepartment> = {
    'k12': SalesDepartment.K12,
    'k12-seed': SalesDepartment.K12,
    'k12-school': SalesDepartment.K12,
    'ug': SalesDepartment.UG,
    'lead': SalesDepartment.PG,  // LEAD programs map to PG
    'lead-vc': SalesDepartment.PG,  // LEAD Venture Capital page
  };

  return mappings[page] || SalesDepartment.NONE;
}

/**
 * Map Sales Department to default Program Interested
 */
export function getDepartmentDefaultProgram(salesDepartment: SalesDepartment): ProgramInterested {
  const mappings: Record<SalesDepartment, ProgramInterested> = {
    [SalesDepartment.K12]: ProgramInterested.SEED_WEEKEND_SCHOOL,
    [SalesDepartment.UG]: ProgramInterested.BUILD_BBA_ENTREPRENEURSHIP,
    [SalesDepartment.PG]: ProgramInterested.LEAD_VENTURE_BUILDING,
    [SalesDepartment.EDGE_AI_ONLINE_TEAM]: ProgramInterested.NONE,
    [SalesDepartment.NONE]: ProgramInterested.NONE,
  };

  return mappings[salesDepartment] || ProgramInterested.NONE;
}

/**
 * Get complete program mapping for a page
 * Handles specific k12 page variants with different program mappings
 */
export function getProgramMapping(page: string): ProgramMapping {
  const salesDepartment = getPageSalesDepartment(page);

  // Handle specific k12 page variants
  let programInterested: ProgramInterested;

  if (page === 'k12-school') {
    // k12-school maps to SEED Weekend School
    programInterested = ProgramInterested.SEED_WEEKEND_SCHOOL;
  } else if (page === 'k12-seed') {
    // k12-seed maps to SEED Summer Camp
    programInterested = ProgramInterested.SEED_SUMMER_CAMP;
  } else if (page === 'k12') {
    // k12 maps to SEED B2B
    programInterested = ProgramInterested.SEED_B2B;
  } else if (page === 'lead') {
    // lead page maps to LEAD Venture Building
    programInterested = ProgramInterested.LEAD_VENTURE_BUILDING;
  } else if (page === 'lead-vc') {
    // lead-vc page maps to LEAD Venture Capital & Private Equity
    programInterested = ProgramInterested.LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY;
  } else {
    // For all other pages, use default program for department
    programInterested = getDepartmentDefaultProgram(salesDepartment);
  }

  return {
    salesDepartment,
    programInterested,
  };
}

/**
 * Get all available program options for a Sales Department
 */
export function getDepartmentPrograms(salesDepartment: SalesDepartment): ProgramInterested[] {
  const departmentPrograms: Record<SalesDepartment, ProgramInterested[]> = {
    [SalesDepartment.K12]: [
      ProgramInterested.SEED_WEEKEND_SCHOOL,
      ProgramInterested.SEED_SUMMER_CAMP,
      ProgramInterested.SEED_WINTER_CAMP,
      ProgramInterested.SEED_B2B,
    ],
    [SalesDepartment.UG]: [
      ProgramInterested.BUILD_BBA_ENTREPRENEURSHIP,
      ProgramInterested.BUILD_BTECH_TECHNOLOGY,
    ],
    [SalesDepartment.PG]: [
      ProgramInterested.LEAD_VENTURE_BUILDING,
      ProgramInterested.LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY,
    ],
    [SalesDepartment.EDGE_AI_ONLINE_TEAM]: [],
    [SalesDepartment.NONE]: [],
  };

  return departmentPrograms[salesDepartment] || [];
}

/**
 * Validate if a program is valid for a given Sales Department
 */
export function isValidProgramForDepartment(
  programInterested: ProgramInterested,
  salesDepartment: SalesDepartment
): boolean {
  const validPrograms = getDepartmentPrograms(salesDepartment);
  return validPrograms.includes(programInterested);
}

/**
 * Get human-readable labels
 */
export function getSalesDepartmentLabel(salesDepartment: SalesDepartment): string {
  const labels: Record<SalesDepartment, string> = {
    [SalesDepartment.K12]: 'SEED - K12 Team',
    [SalesDepartment.UG]: 'BUILD - UG Team',
    [SalesDepartment.PG]: 'LEAD - Executive Team',
    [SalesDepartment.EDGE_AI_ONLINE_TEAM]: 'EDGE AI - Online Team',
    [SalesDepartment.NONE]: 'Not Specified',
  };

  return labels[salesDepartment] || 'Unknown';
}

export function getProgramInterestedLabel(programInterested: ProgramInterested): string {
  const labels: Record<ProgramInterested, string> = {
    [ProgramInterested.SRI_SAI_KOLLURU]: 'Sri Sai Kolluru',
    [ProgramInterested.RAHUL_BHARADWAJ]: 'Rahul Bharadwaj',
    [ProgramInterested.LEAD_VENTURE_BUILDING]: 'LEAD - Venture Building',
    [ProgramInterested.LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY]: 'LEAD - Venture Capital & Private Equity',
    [ProgramInterested.SEED_WEEKEND_SCHOOL]: 'SEED - Weekend School',
    [ProgramInterested.SEED_SUMMER_CAMP]: 'SEED - Summer Camp',
    [ProgramInterested.SEED_WINTER_CAMP]: 'SEED - Winter Camp',
    [ProgramInterested.SEED_B2B]: 'SEED - B2B',
    [ProgramInterested.BUILD_BBA_ENTREPRENEURSHIP]: 'BUILD - BBA in Entrepreneurship',
    [ProgramInterested.BUILD_BTECH_TECHNOLOGY]: 'BUILD - BTECH in Technology',
    [ProgramInterested.NONE]: 'Not Specified',
  };

  return labels[programInterested] || 'Unknown';
}