-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('NONE', 'PERFORMANCE_MARKETING', 'OFFLINE_ADVERTISEMENT', 'COLD_CALL', 'REFERRAL', 'EXTERNAL_REFERRAL', 'WEBSITE', 'WEBSITE_CHATBOT', 'WHATSAPP_CAMPAIGNS', 'WHATSAPP_BOWER_SCHOOL', 'INSTAGRAM_ADS', 'FACEBOOK_ADS', 'LINKEDIN_CAMPAIGNS', 'YOUTUBE_ADS', 'EMAIL_MARKETING', 'GOOGLE_ADS', 'COUNSELOR_SCHOOL_REFERRALS', 'WEBINARS_VIRTUAL_EVENTS', 'MASTERCLASS_GUEST_TALKS', 'EDUCATIONAL_FAIRS_EXHIBITIONS', 'NEWSPAPER_MEDIA', 'SCHOLARSHIP_PROGRAMS', 'EDUCATIONAL_PORTALS_AGGREGATORS', 'STUDENT_ALUMNI_NETWORK', 'COMPETITIONS_CHALLENGES', 'WORD_OF_MOUTH', 'INFLUENCERS_CONTENT_CREATORS');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NONE', 'QUALIFIED_INTERESTED', 'CONTACTED', 'CONTACT_IN_FUTURE', 'NOT_REACHABLE', 'NOT_ELIGIBLE_NOT_QUALIFIED', 'NOT_INTERESTED', 'JUNK_LEAD');

-- CreateEnum
CREATE TYPE "LeadSubStatus" AS ENUM ('NONE', 'PLANNING_AFTER_1_MONTH', 'PLANNING_AFTER_2_MONTHS', 'PLANNING_AFTER_3_MONTHS', 'PLANNING_AFTER_6_MONTHS', 'PLANNING_FOR_NEXT_YEAR', 'JOINED_SOMEWHERE_ELSE', 'FINANCIAL_ISSUES', 'DROPPED_THE_PLAN', 'ALREADY_ENROLLED_OTHER_INSTITUTE', 'TIME_CONSTRAINT', 'CALLED_MULTIPLE_TIMES', 'WRONG_NUMBER', 'SWITCHED_OFF', 'NUMBER_BUSY', 'CALL_DISCONNECTED', 'RNR_1', 'RNR_2', 'RNR_3', 'RNR_4', 'POOR_COMMUNICATION', 'UNDERQUALIFIED', 'OVERQUALIFIED', 'LANGUAGE_BARRIER', 'DEMO_SESSION_CAMPUS_VISIT_SCHEDULED', 'APPLICATION_SHARED', 'BEAT_SCHOLARSHIP_TEST_SCHEDULED', 'LEAD_EXPRESSED_INITIAL_INTEREST', 'LEAD_REQUESTED_MORE_INFO', 'FOLLOW_UP_NEEDED');

-- CreateEnum
CREATE TYPE "Board" AS ENUM ('NONE', 'ICSE', 'CBSE', 'IB', 'STATE_BOARD', 'NIOS', 'CAIE');

-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('NONE', 'GRADE_3', 'GRADE_4', 'GRADE_5', 'GRADE_6', 'GRADE_7', 'GRADE_8', 'GRADE_9', 'GRADE_10', 'GRADE_11', 'GRADE_12');

-- CreateEnum
CREATE TYPE "AcademicStream" AS ENUM ('NONE', 'SCIENCE', 'COMMERCE', 'ARTS_HUMANITIES');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('NONE', 'MALE', 'FEMALE', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "SalesDepartment" AS ENUM ('NONE', 'SEED_K12_TEAM', 'BUILD_UG_TEAM', 'LEAD_EXECUTIVE_TEAM', 'EDGE_AI_ONLINE_TEAM');

-- CreateEnum
CREATE TYPE "ProgramInterested" AS ENUM ('NONE', 'BUILD_BBA_ENTREPRENEURSHIP', 'BUILD_BTECH_TECHNOLOGY', 'LEAD_VENTURE_BUILDING', 'LEAD_VENTURE_CAPITAL_PRIVATE_EQUITY', 'SEED_WEEKEND_SCHOOL', 'SEED_SUMMER_CAMP', 'SEED_WINTER_CAMP', 'SEED_B2B');

-- CreateEnum
CREATE TYPE "Salutation" AS ENUM ('NONE', 'MR', 'MRS', 'MS', 'DR', 'PROF');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "program" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpcomingEvent" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT,
    "location" TEXT,
    "venue" TEXT,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "imageUrl" TEXT,
    "thumbnailUrl" TEXT,
    "height" TEXT NOT NULL DEFAULT 'medium',
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "capacity" INTEGER,
    "registeredCount" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION,
    "registrationLink" TEXT,
    "agenda" JSONB,
    "speakers" JSONB,
    "sponsors" JSONB,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UpcomingEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastEvent" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT,
    "location" TEXT,
    "venue" TEXT,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "imageUrl" TEXT,
    "thumbnailUrl" TEXT,
    "videoUrl" TEXT,
    "galleryImages" JSONB,
    "speakers" JSONB,
    "agenda" JSONB,
    "testimonials" JSONB,
    "stats" JSONB,
    "resources" JSONB,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "attendeeCount" INTEGER,
    "duration" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "size" TEXT NOT NULL DEFAULT 'small',
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PastEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Masterclass" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT,
    "category" TEXT NOT NULL DEFAULT 'BowerClass',
    "videoThumbnail" TEXT,
    "videoUrl" TEXT,
    "learningOutcomes" JSONB,
    "galleryImages" JSONB,
    "prerequisites" TEXT,
    "duration" TEXT,
    "level" TEXT,
    "studentPortalConfig" JSONB,
    "assignmentDetails" JSONB,
    "registrationCode" TEXT,
    "instructors" JSONB,
    "resources" JSONB,
    "maxStudents" INTEGER,
    "registeredCount" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION,
    "registrationOpen" BOOLEAN NOT NULL DEFAULT true,
    "registrationLink" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "tags" JSONB,
    "highlights" JSONB,
    "testimonials" JSONB,
    "networkStats" JSONB,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Masterclass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZohoCredential" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientSecret" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "tokenExpiresAt" TIMESTAMP(3),
    "redirectUri" TEXT NOT NULL,
    "scope" TEXT[],
    "accountsUrl" TEXT NOT NULL DEFAULT 'https://accounts.zoho.in',
    "apiDomain" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ZohoCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "leadSource" "LeadSource" NOT NULL DEFAULT 'WEBSITE',
    "firstName" TEXT,
    "salutation" "Salutation",
    "phone" TEXT,
    "mobile" TEXT,
    "secondaryEmail" TEXT,
    "leadStatus" "LeadStatus" NOT NULL DEFAULT 'QUALIFIED_INTERESTED',
    "leadSubStatus" "LeadSubStatus",
    "grade" "Grade",
    "board" "Board",
    "academicStream" "AcademicStream",
    "gender" "Gender",
    "birthday" TIMESTAMP(3),
    "schoolInstitution" TEXT,
    "parentGuardianName" TEXT,
    "parentGuardianEmail" TEXT,
    "parentGuardianPhone" TEXT,
    "relationshipToStudent" TEXT,
    "occupation" TEXT,
    "referrerName" TEXT,
    "referrerEmail" TEXT,
    "referrerPhone" TEXT,
    "referralCode" TEXT,
    "salesDepartment" "SalesDepartment",
    "programInterested" "ProgramInterested",
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmContent" TEXT,
    "utmTerm" TEXT,
    "otherSource" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "country" TEXT,
    "emailOptOut" BOOLEAN NOT NULL DEFAULT false,
    "whatsappOptOut" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "qualificationScore" INTEGER DEFAULT 0,
    "engagementScore" INTEGER DEFAULT 0,
    "lastActivityTime" TIMESTAMP(3),
    "zohoLeadId" TEXT,
    "syncStatus" TEXT NOT NULL DEFAULT 'pending',
    "syncError" TEXT,
    "syncAttempts" INTEGER NOT NULL DEFAULT 0,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZohoSyncLog" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "request" JSONB,
    "response" JSONB,
    "error" TEXT,
    "httpStatus" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ZohoSyncLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UpcomingEvent_slug_key" ON "UpcomingEvent"("slug");

-- CreateIndex
CREATE INDEX "UpcomingEvent_slug_idx" ON "UpcomingEvent"("slug");

-- CreateIndex
CREATE INDEX "UpcomingEvent_category_idx" ON "UpcomingEvent"("category");

-- CreateIndex
CREATE INDEX "UpcomingEvent_date_idx" ON "UpcomingEvent"("date");

-- CreateIndex
CREATE INDEX "UpcomingEvent_isPublished_idx" ON "UpcomingEvent"("isPublished");

-- CreateIndex
CREATE UNIQUE INDEX "PastEvent_slug_key" ON "PastEvent"("slug");

-- CreateIndex
CREATE INDEX "PastEvent_slug_idx" ON "PastEvent"("slug");

-- CreateIndex
CREATE INDEX "PastEvent_category_idx" ON "PastEvent"("category");

-- CreateIndex
CREATE INDEX "PastEvent_date_idx" ON "PastEvent"("date");

-- CreateIndex
CREATE INDEX "PastEvent_isPublished_idx" ON "PastEvent"("isPublished");

-- CreateIndex
CREATE UNIQUE INDEX "Masterclass_slug_key" ON "Masterclass"("slug");

-- CreateIndex
CREATE INDEX "Masterclass_slug_idx" ON "Masterclass"("slug");

-- CreateIndex
CREATE INDEX "Masterclass_category_idx" ON "Masterclass"("category");

-- CreateIndex
CREATE INDEX "Masterclass_date_idx" ON "Masterclass"("date");

-- CreateIndex
CREATE INDEX "Masterclass_isPublished_idx" ON "Masterclass"("isPublished");

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_syncStatus_idx" ON "Lead"("syncStatus");

-- CreateIndex
CREATE INDEX "Lead_zohoLeadId_idx" ON "Lead"("zohoLeadId");

-- CreateIndex
CREATE INDEX "Lead_leadStatus_idx" ON "Lead"("leadStatus");

-- CreateIndex
CREATE INDEX "Lead_leadSource_idx" ON "Lead"("leadSource");

-- CreateIndex
CREATE INDEX "Lead_grade_idx" ON "Lead"("grade");

-- CreateIndex
CREATE INDEX "Lead_salesDepartment_idx" ON "Lead"("salesDepartment");

-- CreateIndex
CREATE INDEX "Lead_qualificationScore_idx" ON "Lead"("qualificationScore");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");

-- CreateIndex
CREATE INDEX "ZohoSyncLog_leadId_idx" ON "ZohoSyncLog"("leadId");

-- CreateIndex
CREATE INDEX "ZohoSyncLog_status_idx" ON "ZohoSyncLog"("status");

-- CreateIndex
CREATE INDEX "ZohoSyncLog_createdAt_idx" ON "ZohoSyncLog"("createdAt");

-- AddForeignKey
ALTER TABLE "ZohoSyncLog" ADD CONSTRAINT "ZohoSyncLog_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;
