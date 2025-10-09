-- Migration: Add BUILD programs to ProgramInterested enum
-- This script adds BUILD_BBA_ENTREPRENEURSHIP and BUILD_BTECH_TECHNOLOGY to the ProgramInterested enum

BEGIN;

-- Add new values to ProgramInterested enum
ALTER TYPE "ProgramInterested" ADD VALUE IF NOT EXISTS 'BUILD_BBA_ENTREPRENEURSHIP';
ALTER TYPE "ProgramInterested" ADD VALUE IF NOT EXISTS 'BUILD_BTECH_TECHNOLOGY';

COMMIT;
