# Multi-Step Lead Form Test

This is a comprehensive multi-step form for lead data collection with Zoho CRM integration.

## Access URL

Visit http://localhost:3001/test to access the form.

## Features

### 5-Step Progressive Form

1. **Required Information** (Step 1)
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone (required)
   - Lead Source (required dropdown)

2. **Contact Details** (Step 2)
   - Salutation
   - Mobile Number
   - Secondary Email
   - Lead Status & Sub Status
   - Communication Preferences

3. **Student Information** (Step 3)
   - Grade (Grade 3-12)
   - Board (ICSE, CBSE, IB, etc.)
   - Academic Stream (for Grade 11-12)
   - Gender
   - Date of Birth
   - School/Institution

4. **Parent/Guardian** (Step 4)
   - Parent/Guardian details
   - Relationship to Student
   - Occupation
   - Complete Address

5. **Program & Referral** (Step 5)
   - Sales Department
   - Program Interested
   - Referral Information
   - UTM Tracking Parameters
   - Additional Description

6. **Review & Submit** (Final Step)
   - Review all entered data
   - Submit form to save locally
   - Manual push to Zoho CRM button

### Key Functionality

#### Duplicate Detection
- **On Email Entry**: Automatically checks for duplicates in both local database and Zoho CRM
- **Auto-Population**: If duplicate found, form fields are auto-populated with existing data
- **Visual Indicators**: Shows alerts when duplicate is detected

#### Data Persistence
- **Auto-Save**: Form data is automatically saved to localStorage
- **Resume Later**: Can close and return to continue filling the form
- **Local Database Save**: After Step 1, data is saved to local database

#### Zoho CRM Integration
- **Manual Push**: Explicit button to push lead to Zoho CRM
- **Duplicate Handling**: Shows warning if lead exists in Zoho
- **Sync Status**: Visual indicators for sync success/failure

### API Endpoints

#### `/app/test/api/check-duplicate`
- **Method**: POST
- **Body**: `{ email: string }`
- **Purpose**: Check for duplicate leads

#### `/app/test/api/save-lead`
- **Method**: POST/PUT
- **Purpose**: Save/Update lead in local database

#### `/app/test/api/push-to-zoho`
- **Method**: POST
- **Body**: `{ leadId: string }`
- **Purpose**: Push lead from local to Zoho CRM

### Testing Workflow

1. **Start Fresh**
   - Clear localStorage if needed
   - Fill Step 1 with required fields
   - Click Next to save to local database

2. **Test Duplicate Detection**
   - Enter an existing email
   - Watch for auto-population
   - See duplicate warning

3. **Complete Form**
   - Progress through all steps
   - Review data in final step
   - Submit to save locally

4. **Push to Zoho**
   - Click "Push to Zoho CRM" button
   - Watch for success/failure message
   - Check Zoho CRM for new lead

### Debug Mode

Toggle debug mode checkbox at bottom of form to see:
- Current form state
- API responses
- Lead IDs
- Duplicate detection info

### Important Notes

- **No Automatic Zoho Sync**: Leads are NOT automatically pushed to Zoho
- **Manual Push Required**: Use the explicit "Push to Zoho CRM" button
- **Duplicate Safety**: System prevents accidental duplicate creation
- **Data Validation**: Each step validates required fields before proceeding