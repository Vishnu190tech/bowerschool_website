-- Manual migration to update enum values to match current database state
-- This migration aligns enums with the values currently in the production database

-- Update SalesDepartment enum
ALTER TYPE "SalesDepartment" RENAME VALUE 'K12' TO 'SEED_K12_TEAM_TEMP';
ALTER TYPE "SalesDepartment" RENAME VALUE 'UG' TO 'BUILD_UG_TEAM_TEMP';
ALTER TYPE "SalesDepartment" RENAME VALUE 'PG' TO 'LEAD_EXECUTIVE_TEAM_TEMP';
ALTER TYPE "SalesDepartment" RENAME VALUE 'SEED_K12_TEAM_TEMP' TO 'SEED_K12_TEAM';
ALTER TYPE "SalesDepartment" RENAME VALUE 'BUILD_UG_TEAM_TEMP' TO 'BUILD_UG_TEAM';
ALTER TYPE "SalesDepartment" RENAME VALUE 'LEAD_EXECUTIVE_TEAM_TEMP' TO 'LEAD_EXECUTIVE_TEAM';

-- No changes needed for LeadSource - values already match

-- No changes needed for LeadStatus - values already match

-- No changes needed for LeadSubStatus - values already match

-- Update default values in Lead table to match new enum values
ALTER TABLE "Lead" ALTER COLUMN "leadSource" SET DEFAULT 'WEBSITE';
ALTER TABLE "Lead" ALTER COLUMN "leadStatus" SET DEFAULT 'QUALIFIED_INTERESTED';
