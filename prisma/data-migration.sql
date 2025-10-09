-- Data Migration: Update enum values to match Zoho CRM
-- This script migrates existing data from old enum values to new Zoho-compatible values

-- Step 1: Update LeadSource values
-- WEBSITE → ONLINESTORE (Website in Zoho)
UPDATE "Lead"
SET "leadSource" = 'ONLINESTORE'
WHERE "leadSource" = 'WEBSITE';

-- Map other old LeadSource values to appropriate Zoho values
UPDATE "Lead"
SET "leadSource" = 'PERFORMANCE_MARKETING'
WHERE "leadSource" IN ('GOOGLE_ADS', 'FACEBOOK_ADS', 'INSTAGRAM_ADS', 'LINKEDIN_CAMPAIGNS', 'YOUTUBE_ADS');

UPDATE "Lead"
SET "leadSource" = 'ADVERTISEMENT'
WHERE "leadSource" = 'OFFLINE_ADVERTISEMENT';

UPDATE "Lead"
SET "leadSource" = 'EXTERNAL_REFERRAL'
WHERE "leadSource" IN ('REFERRAL', 'COUNSELOR_SCHOOL_REFERRALS');

UPDATE "Lead"
SET "leadSource" = 'EMAIL_MARKETING'
WHERE "leadSource" = 'EMAIL_MARKETING';

UPDATE "Lead"
SET "leadSource" = 'CHAT'
WHERE "leadSource" = 'WEBSITE_CHATBOT';

UPDATE "Lead"
SET "leadSource" = 'WHATSAPP_BOWER_SCHOOL'
WHERE "leadSource" = 'WHATSAPP_CAMPAIGNS';

UPDATE "Lead"
SET "leadSource" = 'EDUCATIONAL_FAIRS_EXHIBITIONS'
WHERE "leadSource" IN ('WEBINARS_VIRTUAL_EVENTS', 'MASTERCLASS_GUEST_TALKS');

UPDATE "Lead"
SET "leadSource" = 'PRESS_PR'
WHERE "leadSource" = 'NEWSPAPER_MEDIA';

-- Step 2: Update LeadStatus values
-- QUALIFIED_INTERESTED → INTERESTED
UPDATE "Lead"
SET "leadStatus" = 'INTERESTED'
WHERE "leadStatus" = 'QUALIFIED_INTERESTED';

-- NOT_REACHABLE → ATTEMPTED_TO_CONTACT
UPDATE "Lead"
SET "leadStatus" = 'ATTEMPTED_TO_CONTACT'
WHERE "leadStatus" = 'NOT_REACHABLE';

-- NOT_ELIGIBLE_NOT_QUALIFIED → NOT_INTERESTED
UPDATE "Lead"
SET "leadStatus" = 'NOT_INTERESTED'
WHERE "leadStatus" = 'NOT_ELIGIBLE_NOT_QUALIFIED';

-- Step 3: Update SalesDepartment values
-- SEED_K12_TEAM → K12
UPDATE "Lead"
SET "salesDepartment" = 'K12'
WHERE "salesDepartment" = 'SEED_K12_TEAM';

-- BUILD_UG_TEAM → UG
UPDATE "Lead"
SET "salesDepartment" = 'UG'
WHERE "salesDepartment" = 'BUILD_UG_TEAM';

-- LEAD_EXECUTIVE_TEAM → PG
UPDATE "Lead"
SET "salesDepartment" = 'PG'
WHERE "salesDepartment" = 'LEAD_EXECUTIVE_TEAM';

-- Step 4: Update ProgramInterested values
-- BUILD_BBA_ENTREPRENEURSHIP → NONE (no equivalent in Zoho)
UPDATE "Lead"
SET "programInterested" = 'NONE'
WHERE "programInterested" = 'BUILD_BBA_ENTREPRENEURSHIP';

-- BUILD_BTECH_TECHNOLOGY → NONE (no equivalent in Zoho)
UPDATE "Lead"
SET "programInterested" = 'NONE'
WHERE "programInterested" = 'BUILD_BTECH_TECHNOLOGY';

-- Step 5: Update LeadSubStatus values (if any exist)
-- ALREADY_ENROLLED_OTHER_INSTITUTE → NONE
UPDATE "Lead"
SET "leadSubStatus" = 'NONE'
WHERE "leadSubStatus" = 'ALREADY_ENROLLED_OTHER_INSTITUTE';

-- APPLICATION_SHARED → NONE
UPDATE "Lead"
SET "leadSubStatus" = 'NONE'
WHERE "leadSubStatus" = 'APPLICATION_SHARED';

-- LEAD_REQUESTED_MORE_INFO → NONE
UPDATE "Lead"
SET "leadSubStatus" = 'NONE'
WHERE "leadSubStatus" = 'LEAD_REQUESTED_MORE_INFO';

-- Verification queries (uncomment to check)
-- SELECT "leadSource", COUNT(*) FROM "Lead" GROUP BY "leadSource";
-- SELECT "leadStatus", COUNT(*) FROM "Lead" GROUP BY "leadStatus";
-- SELECT "salesDepartment", COUNT(*) FROM "Lead" GROUP BY "salesDepartment";
-- SELECT "programInterested", COUNT(*) FROM "Lead" GROUP BY "programInterested";
