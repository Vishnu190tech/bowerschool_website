/**
 * Enum Mapping Utilities for Prisma ↔ Zoho CRM
 *
 * These utilities convert between Prisma enum values and Zoho API string values
 */

import {
  LeadSource,
  LeadStatus,
  LeadSubStatus,
  Board,
  Grade,
  AcademicStream,
  Gender,
  SalesDepartment,
  ProgramInterested,
  Salutation
} from '@prisma/client';

// ===== LEAD SOURCE MAPPINGS =====

export const leadSourceToZoho: Record<LeadSource, string> = {
  NONE: '-None-',
  PERFORMANCE_MARKETING: 'Performance Marketing',
  OFFLINE_ADVERTISEMENT: 'Offline Advertisement',
  COLD_CALL: 'Cold Call',
  REFERRAL: 'Referral',
  EXTERNAL_REFERRAL: 'External Referral',
  WEBSITE: 'Website',
  WEBSITE_CHATBOT: 'Website Chatbot',
  WHATSAPP_CAMPAIGNS: 'WhatsApp Campaigns',
  WHATSAPP_BOWER_SCHOOL: 'WhatsApp - Bower School',
  INSTAGRAM_ADS: 'Instagram Ads',
  FACEBOOK_ADS: 'Facebook Ads',
  LINKEDIN_CAMPAIGNS: 'LinkedIn Campaigns',
  YOUTUBE_ADS: 'YouTube Ads',
  EMAIL_MARKETING: 'Email Marketing',
  GOOGLE_ADS: 'Google Ads',
  COUNSELOR_SCHOOL_REFERRALS: 'Counselor/School Referrals',
  WEBINARS_VIRTUAL_EVENTS: 'Webinars & Virtual Events',
  MASTERCLASS_GUEST_TALKS: 'Masterclass/Guest Talks',
  EDUCATIONAL_FAIRS_EXHIBITIONS: 'Educational Fairs & Exhibitions',
  NEWSPAPER_MEDIA: 'Newspaper/Media',
  SCHOLARSHIP_PROGRAMS: 'Scholarship Programs',
  EDUCATIONAL_PORTALS_AGGREGATORS: 'Educational Portals & Aggregators',
  STUDENT_ALUMNI_NETWORK: 'Student Alumni Network',
  COMPETITIONS_CHALLENGES: 'Competitions/Challenges',
  WORD_OF_MOUTH: 'Word of Mouth',
  INFLUENCERS_CONTENT_CREATORS: 'Influencers/Content Creators'
};

export const zohoToLeadSource: Record<string, LeadSource> = Object.entries(leadSourceToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as LeadSource }),
  {}
);

// ===== LEAD STATUS MAPPINGS =====

export const leadStatusToZoho: Record<LeadStatus, string> = {
  NONE: '-None-',
  QUALIFIED_INTERESTED: 'Qualified/Interested',
  CONTACTED: 'Contacted',
  CONTACT_IN_FUTURE: 'Contact in Future',
  NOT_REACHABLE: 'Not Reachable',
  NOT_ELIGIBLE_NOT_QUALIFIED: 'Not Eligible/Not Qualified',
  NOT_INTERESTED: 'Not Interested',
  JUNK_LEAD: 'Junk Lead'
};

export const zohoToLeadStatus: Record<string, LeadStatus> = Object.entries(leadStatusToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as LeadStatus }),
  {}
);

// ===== LEAD SUB STATUS MAPPINGS =====

export const leadSubStatusToZoho: Record<LeadSubStatus, string> = {
  NONE: '-None-',
  PLANNING_AFTER_1_MONTH: 'Planning After 1 Month',
  PLANNING_AFTER_2_MONTHS: 'Planning After 2 Months',
  PLANNING_AFTER_3_MONTHS: 'Planning After 3 Months',
  PLANNING_AFTER_6_MONTHS: 'Planning After 6 Months',
  PLANNING_FOR_NEXT_YEAR: 'Planning For Next Year',
  JOINED_SOMEWHERE_ELSE: 'Joined Somewhere Else',
  FINANCIAL_ISSUES: 'Financial Issues',
  DROPPED_THE_PLAN: 'Dropped The Plan',
  ALREADY_ENROLLED_OTHER_INSTITUTE: 'Already Enrolled in Other Institute',
  TIME_CONSTRAINT: 'Time Constraint',
  CALLED_MULTIPLE_TIMES: 'Called Multiple Times',
  WRONG_NUMBER: 'Wrong Number',
  SWITCHED_OFF: 'Switched Off',
  NUMBER_BUSY: 'Number Busy',
  CALL_DISCONNECTED: 'Call Disconnected',
  RNR_1: 'RNR 1',
  RNR_2: 'RNR 2',
  RNR_3: 'RNR 3',
  RNR_4: 'RNR 4',
  POOR_COMMUNICATION: 'Poor Communication',
  UNDERQUALIFIED: 'Underqualified',
  OVERQUALIFIED: 'Overqualified',
  LANGUAGE_BARRIER: 'Language Barrier',
  DEMO_SESSION_CAMPUS_VISIT_SCHEDULED: 'Demo Session/Campus Visit Scheduled',
  APPLICATION_SHARED: 'Application Shared for Submission',
  BEAT_SCHOLARSHIP_TEST_SCHEDULED: 'BEAT/Scholarship Test Scheduled',
  LEAD_EXPRESSED_INITIAL_INTEREST: 'Lead Expressed Initial Interest',
  LEAD_REQUESTED_MORE_INFO: 'Lead Requested More Information',
  FOLLOW_UP_NEEDED: 'Follow-up Needed'
};

export const zohoToLeadSubStatus: Record<string, LeadSubStatus> = Object.entries(leadSubStatusToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as LeadSubStatus }),
  {}
);

// ===== BOARD MAPPINGS =====

export const boardToZoho: Record<Board, string> = {
  NONE: '-None-',
  ICSE: 'ICSE',
  CBSE: 'CBSE',
  IB: 'IB',
  STATE_BOARD: 'State Board',
  NIOS: 'NIOS',
  CAIE: 'CAIE'
};

export const zohoToBoard: Record<string, Board> = Object.entries(boardToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as Board }),
  {}
);

// ===== GRADE MAPPINGS =====

export const gradeToZoho: Record<Grade, string> = {
  NONE: '-None-',
  GRADE_3: 'Grade 3',
  GRADE_4: 'Grade 4',
  GRADE_5: 'Grade 5',
  GRADE_6: 'Grade 6',
  GRADE_7: 'Grade 7',
  GRADE_8: 'Grade 8',
  GRADE_9: 'Grade 9',
  GRADE_10: 'Grade 10',
  GRADE_11: 'Grade 11',
  GRADE_12: 'Grade 12'
};

export const zohoToGrade: Record<string, Grade> = Object.entries(gradeToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as Grade }),
  {}
);

// ===== ACADEMIC STREAM MAPPINGS =====

export const academicStreamToZoho: Record<AcademicStream, string> = {
  NONE: '-None-',
  SCIENCE: 'Science',
  COMMERCE: 'Commerce',
  ARTS_HUMANITIES: 'Arts/Humanities'
};

export const zohoToAcademicStream: Record<string, AcademicStream> = Object.entries(academicStreamToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as AcademicStream }),
  {}
);

// ===== GENDER MAPPINGS =====

export const genderToZoho: Record<Gender, string> = {
  NONE: '-None-',
  MALE: 'Male',
  FEMALE: 'Female',
  PREFER_NOT_TO_SAY: 'Prefer not to say'
};

export const zohoToGender: Record<string, Gender> = Object.entries(genderToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as Gender }),
  {}
);

// ===== SALES DEPARTMENT MAPPINGS =====

export const salesDepartmentToZoho: Record<SalesDepartment, string> = {
  NONE: '-None-',
  SEED_K12_TEAM: 'SEED - K12 Team',
  BUILD_UG_TEAM: 'BUILD - UG Team',
  LEAD_EXECUTIVE_TEAM: 'LEAD - Executive Team',
  EDGE_AI_ONLINE_TEAM: 'EDGE AI - Online Team'
};

export const zohoToSalesDepartment: Record<string, SalesDepartment> = Object.entries(salesDepartmentToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as SalesDepartment }),
  {}
);

// ===== PROGRAM INTERESTED MAPPINGS =====

export const programInterestedToZoho: Record<ProgramInterested, string> = {
  NONE: '-None-',
  BUILD_BBA_ENTREPRENEURSHIP: 'BUILD - BBA in Entrepreneurship',
  BUILD_BTECH_TECHNOLOGY: 'BUILD - BTECH in Technology',
  LEAD_VENTURE_BUILDING: 'LEAD - Venture Building',
  LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY: 'LEAD - Venture Capital & Private Equity',
  SEED_WEEKEND_SCHOOL: 'SEED - Weekend School',
  SEED_SUMMER_CAMP: 'SEED - Summer Camp',
  SEED_WINTER_CAMP: 'SEED - Winter Camp',
  SEED_B2B: 'SEED - B2B'
};

export const zohoToProgramInterested: Record<string, ProgramInterested> = Object.entries(programInterestedToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as ProgramInterested }),
  {}
);

// ===== SALUTATION MAPPINGS =====

export const salutationToZoho: Record<Salutation, string> = {
  NONE: '-None-',
  MR: 'Mr.',
  MRS: 'Mrs.',
  MS: 'Ms.',
  DR: 'Dr.',
  PROF: 'Prof.'
};

export const zohoToSalutation: Record<string, Salutation> = Object.entries(salutationToZoho).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key as Salutation }),
  {}
);

// ===== HELPER FUNCTIONS =====

/**
 * Convert Lead Source from Prisma enum to Zoho string
 */
export function mapLeadSourceToZoho(source: LeadSource | null | undefined): string | undefined {
  if (!source || source === 'NONE') return undefined;
  return leadSourceToZoho[source];
}

/**
 * Convert Lead Source from Zoho string to Prisma enum
 */
export function mapLeadSourceFromZoho(source: string | null | undefined): LeadSource | undefined {
  if (!source || source === '-None-') return undefined;
  return zohoToLeadSource[source] || LeadSource.WEBSITE;
}

/**
 * Convert Lead Status from Prisma enum to Zoho string
 */
export function mapLeadStatusToZoho(status: LeadStatus | null | undefined): string | undefined {
  if (!status || status === 'NONE') return undefined;
  return leadStatusToZoho[status];
}

/**
 * Convert Lead Status from Zoho string to Prisma enum
 */
export function mapLeadStatusFromZoho(status: string | null | undefined): LeadStatus | undefined {
  if (!status || status === '-None-') return undefined;
  return zohoToLeadStatus[status];
}

/**
 * Convert Lead Sub Status from Prisma enum to Zoho string
 */
export function mapLeadSubStatusToZoho(subStatus: LeadSubStatus | null | undefined): string | undefined {
  if (!subStatus || subStatus === 'NONE') return undefined;
  return leadSubStatusToZoho[subStatus];
}

/**
 * Convert Lead Sub Status from Zoho string to Prisma enum
 */
export function mapLeadSubStatusFromZoho(subStatus: string | null | undefined): LeadSubStatus | undefined {
  if (!subStatus || subStatus === '-None-') return undefined;
  return zohoToLeadSubStatus[subStatus];
}

/**
 * Convert Board from Prisma enum to Zoho string
 */
export function mapBoardToZoho(board: Board | null | undefined): string | undefined {
  if (!board || board === 'NONE') return undefined;
  return boardToZoho[board];
}

/**
 * Convert Board from Zoho string to Prisma enum
 */
export function mapBoardFromZoho(board: string | null | undefined): Board | undefined {
  if (!board || board === '-None-') return undefined;
  return zohoToBoard[board];
}

/**
 * Convert Grade from Prisma enum to Zoho string
 */
export function mapGradeToZoho(grade: Grade | null | undefined): string | undefined {
  if (!grade || grade === 'NONE') return undefined;
  return gradeToZoho[grade];
}

/**
 * Convert Grade from Zoho string to Prisma enum
 */
export function mapGradeFromZoho(grade: string | null | undefined): Grade | undefined {
  if (!grade || grade === '-None-') return undefined;
  return zohoToGrade[grade];
}

/**
 * Convert Academic Stream from Prisma enum to Zoho string
 */
export function mapAcademicStreamToZoho(stream: AcademicStream | null | undefined): string | undefined {
  if (!stream || stream === 'NONE') return undefined;
  return academicStreamToZoho[stream];
}

/**
 * Convert Academic Stream from Zoho string to Prisma enum
 */
export function mapAcademicStreamFromZoho(stream: string | null | undefined): AcademicStream | undefined {
  if (!stream || stream === '-None-') return undefined;
  return zohoToAcademicStream[stream];
}

/**
 * Convert Gender from Prisma enum to Zoho string
 */
export function mapGenderToZoho(gender: Gender | null | undefined): string | undefined {
  if (!gender || gender === 'NONE') return undefined;
  return genderToZoho[gender];
}

/**
 * Convert Gender from Zoho string to Prisma enum
 */
export function mapGenderFromZoho(gender: string | null | undefined): Gender | undefined {
  if (!gender || gender === '-None-') return undefined;
  return zohoToGender[gender];
}

/**
 * Convert Sales Department from Prisma enum to Zoho string
 */
export function mapSalesDepartmentToZoho(dept: SalesDepartment | null | undefined): string | undefined {
  if (!dept || dept === 'NONE') return undefined;
  return salesDepartmentToZoho[dept];
}

/**
 * Convert Sales Department from Zoho string to Prisma enum
 */
export function mapSalesDepartmentFromZoho(dept: string | null | undefined): SalesDepartment | undefined {
  if (!dept || dept === '-None-') return undefined;
  return zohoToSalesDepartment[dept];
}

/**
 * Convert Program Interested from Prisma enum to Zoho string
 */
export function mapProgramInterestedToZoho(program: ProgramInterested | null | undefined): string | undefined {
  if (!program || program === 'NONE') return undefined;
  return programInterestedToZoho[program];
}

/**
 * Convert Program Interested from Zoho string to Prisma enum
 */
export function mapProgramInterestedFromZoho(program: string | null | undefined): ProgramInterested | undefined {
  if (!program || program === '-None-') return undefined;
  return zohoToProgramInterested[program];
}

/**
 * Convert Salutation from Prisma enum to Zoho string
 */
export function mapSalutationToZoho(salutation: Salutation | null | undefined): string | undefined {
  if (!salutation || salutation === 'NONE') return undefined;
  return salutationToZoho[salutation];
}

/**
 * Convert Salutation from Zoho string to Prisma enum
 */
export function mapSalutationFromZoho(salutation: string | null | undefined): Salutation | undefined {
  if (!salutation || salutation === '-None-') return undefined;
  return zohoToSalutation[salutation];
}
