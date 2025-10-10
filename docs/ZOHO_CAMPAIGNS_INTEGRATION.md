# Zoho Campaigns Integration Documentation

## Overview

This document describes the Zoho Campaigns integration implemented for the Bower School website. The integration allows users to subscribe to mailing lists through forms on the website, with data sent directly to Zoho Campaigns.

**Implementation Date:** January 2025
**Status:** ✅ Production Ready

---

## Table of Contents

1. [Features](#features)
2. [Architecture](#architecture)
3. [Setup & Configuration](#setup--configuration)
4. [API Endpoints](#api-endpoints)
5. [Component Usage](#component-usage)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)
8. [Code Structure](#code-structure)
9. [Important Notes](#important-notes)

---

## Features

### ✅ Implemented Features

- **Direct Zoho Integration**: Emails are sent directly to Zoho Campaigns (no local database storage)
- **Duplicate Detection**: Automatically detects if an email is already registered
- **OAuth Authentication**: Uses existing Zoho OAuth credentials from the database
- **Multiple Mailing Lists**: Supports adding contacts to different lists
- **User Feedback**: Toast notifications for success/error messages
- **Email Validation**: Client and server-side email validation
- **Loading States**: Visual feedback during form submission

### 🎯 User Flow

1. User enters email in ContactFormSection
2. Form validates email format
3. API call to `/api/zoho-campaigns/subscribe`
4. Email is sent to Zoho Campaigns via OAuth
5. Success/error message displayed to user
6. Form resets on success

---

## Architecture

### System Overview

```
┌─────────────────┐
│  User Browser   │
│ (ContactForm)   │
└────────┬────────┘
         │
         │ POST /api/zoho-campaigns/subscribe
         │ { email: "user@example.com" }
         ▼
┌─────────────────────────────────────┐
│  Next.js API Route                  │
│  /api/zoho-campaigns/subscribe      │
│  - Validates input                  │
│  - Calls ZohoCampaignsAPI           │
└────────┬────────────────────────────┘
         │
         │ Uses OAuth token from database
         ▼
┌─────────────────────────────────────┐
│  ZohoCampaignsAPI Class             │
│  lib/zoho/campaigns-api.ts          │
│  - Gets OAuth token                 │
│  - Makes API call to Zoho           │
└────────┬────────────────────────────┘
         │
         │ POST /addlistsubscribersinbulk
         │ Authorization: Zoho-oauthtoken
         ▼
┌─────────────────────────────────────┐
│  Zoho Campaigns API                 │
│  https://campaigns.zoho.in/api/v1.1 │
│  - Validates email domain           │
│  - Checks for duplicates            │
│  - Adds to mailing list             │
└─────────────────────────────────────┘
```

---

## Setup & Configuration

### Prerequisites

1. **Zoho Account**: Active Zoho account with Campaigns access
2. **OAuth Credentials**: Zoho OAuth must be configured in the admin panel
3. **Mailing List**: At least one mailing list created in Zoho Campaigns

### Environment Variables

Add these variables to your `.env.local` file:

```bash
# Zoho Campaigns List Key
# Get this from: Zoho Campaigns > Contacts > Manage Lists > Your List > Setup > View List Key
ZOHO_CAMPAIGNS_LIST_KEY="3z1e41904d9b053c54fcb346c11565246d981c3aa27ea1baa15878d657bbd22b1e"
```

### OAuth Scopes Required

Ensure your Zoho OAuth configuration includes these scopes:

```typescript
const ZOHO_SCOPES = [
  'ZohoCRM.modules.leads.ALL',
  'ZohoCRM.modules.contacts.ALL',
  'ZohoCRM.settings.ALL',
  'ZohoCampaigns.contact.ALL',     // Required for Campaigns
  'ZohoCampaigns.campaign.ALL'      // Required for Campaigns
];
```

**Location:** `/lib/zoho/types.ts`

### Getting Your List Key

1. Log in to Zoho Campaigns
2. Navigate to: **Contacts → Manage Lists**
3. Select your mailing list
4. Click **Setup** → **View List Key**
5. Copy the list key (format: `3z...`)
6. Add to `.env.local` as `ZOHO_CAMPAIGNS_LIST_KEY`

---

## API Endpoints

### 1. Subscribe to Mailing List

**Endpoint:** `POST /api/zoho-campaigns/subscribe`

**Description:** Subscribes an email address to the Zoho Campaigns mailing list.

**Request Body:**
```json
{
  "email": "user@example.com",
  "listKey": "3z..." // Optional, uses default if not provided
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you! You have been successfully subscribed."
}
```

**Response (Duplicate):**
```json
{
  "success": false,
  "isDuplicate": true,
  "message": "This email is already registered in our mailing list."
}
```

**Response (Invalid Domain):**
```json
{
  "success": false,
  "message": "Please use a valid email address from a recognized provider (Gmail, Yahoo, Outlook, etc.)"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Unable to subscribe at this moment. Please try again later."
}
```

### 2. Get Mailing Lists

**Endpoint:** `GET /api/zoho-campaigns/lists`

**Description:** Retrieves all mailing lists from Zoho Campaigns with contact counts.

**Response:**
```json
{
  "success": true,
  "lists": [
    {
      "listkey": "3z...",
      "listname": "Bower School TestList",
      "noofcontacts": "15",
      "created_time": "1752103407000",
      "owner": "Bower School SEED Team"
    }
  ],
  "selectedList": { /* Currently configured list */ },
  "envVariable": "ZOHO_CAMPAIGNS_LIST_KEY=\"3z...\""
}
```

---

## Component Usage

### ContactFormSection

The main component for email subscription forms.

**File:** `/components/ContactFormSection.tsx`

**Basic Usage:**

```tsx
import ContactFormSection from '@/components/ContactFormSection';

export default function MyPage() {
  return (
    <ContactFormSection
      theme="ug"
      title="Want to know more?"
      subtitle="Let us reach out to you"
      buttonText="I want to know more"
    />
  );
}
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'scholarship' \| 'lead' \| 'seed' \| 'ug'` | `'ug'` | Visual theme/color scheme |
| `title` | `string` | `'Want to know more?'` | Form heading |
| `subtitle` | `string` | `'Let us reach out to you'` | Form subheading |
| `buttonText` | `string` | `'I want to know more'` | Submit button text |
| `onSubmit` | `(email: string) => void` | `undefined` | Optional callback after successful submission |
| `backgroundGrid` | `string` | `undefined` | Optional background grid image |

**Example with Callback:**

```tsx
<ContactFormSection
  theme="lead"
  onSubmit={(email) => {
    console.log('User subscribed:', email);
    // Track analytics, etc.
  }}
/>
```

---

## Testing

### Manual Testing via curl

#### Test 1: Subscribe New Email (Success)
```bash
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "testuser@gmail.com"}'

# Expected: {"success":true,"message":"Thank you! You have been successfully subscribed."}
```

#### Test 2: Subscribe Duplicate Email
```bash
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "testuser@gmail.com"}'

# Expected: {"success":false,"isDuplicate":true,"message":"This email is already registered in our mailing list."}
```

#### Test 3: Get All Mailing Lists
```bash
curl http://localhost:3000/api/zoho-campaigns/lists | jq

# Expected: List of all mailing lists with contact counts
```

#### Test 4: Check Contact Count
```bash
curl http://localhost:3000/api/zoho-campaigns/lists | jq '.lists[0].noofcontacts'

# Expected: Current number of contacts
```

### Testing with Different Email Providers

```bash
# Gmail - Should work
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@gmail.com"}'

# Yahoo - Should work
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@yahoo.com"}'

# Custom domain - May be rejected by Zoho
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "user@customdomain.com"}'
```

### Verifying in Zoho Campaigns

1. Log in to Zoho Campaigns
2. Navigate to: **Contacts → Manage Lists**
3. Select your configured list
4. Check if the test emails appear in the contact list
5. Verify the contact count matches your tests

---

## Troubleshooting

### Common Issues & Solutions

#### 1. "No valid access token available"

**Problem:** OAuth token is expired or missing.

**Solution:**
1. Go to admin panel: `/admin`
2. Navigate to Zoho settings
3. Click "Reconnect Zoho"
4. Complete OAuth flow
5. Verify token is saved in database

#### 2. "No mailing list configured"

**Problem:** `ZOHO_CAMPAIGNS_LIST_KEY` is not set.

**Solution:**
1. Get list key from Zoho Campaigns
2. Add to `.env.local`:
   ```bash
   ZOHO_CAMPAIGNS_LIST_KEY="your-list-key-here"
   ```
3. Restart development server

#### 3. Email Rejected - "Please use a valid email address"

**Problem:** Zoho Campaigns validates email domains and rejects some.

**Explanation:**
- Zoho checks if the email domain has proper MX records
- Rejects domains with poor reputation or no email service
- This is a security feature to prevent spam

**Which domains work:**
- ✅ Gmail (gmail.com)
- ✅ Yahoo (yahoo.com, yahoo.co.in)
- ✅ Microsoft (outlook.com, hotmail.com) - Usually works
- ✅ Other major providers with good reputation
- ❌ Custom domains without proper email setup
- ❌ Temporary/disposable email services

**Solution:**
- Use test emails from major providers (Gmail, Yahoo)
- For custom domains: Ensure proper MX records are configured
- Contact Zoho support to whitelist specific domains if needed

#### 4. "Authentication error"

**Problem:** OAuth scopes don't include Campaigns permissions.

**Solution:**
1. Check `/lib/zoho/types.ts`
2. Ensure these scopes are present:
   ```typescript
   'ZohoCampaigns.contact.ALL',
   'ZohoCampaigns.campaign.ALL'
   ```
3. Reconnect Zoho OAuth with updated scopes

#### 5. Form Shows "Submitting..." Forever

**Problem:** API is hanging or timing out.

**Debug Steps:**
1. Check browser console for errors
2. Check Next.js server logs
3. Verify internet connection
4. Test API endpoint directly with curl
5. Check Zoho API status: https://status.zoho.com/

---

## Code Structure

### File Organization

```
bowerschool_website/
├── lib/zoho/
│   ├── campaigns-api.ts       # Zoho Campaigns API wrapper class
│   ├── api.ts                 # Zoho CRM API (existing)
│   ├── oauth.ts               # OAuth token management (shared)
│   └── types.ts               # TypeScript types & scopes
│
├── app/api/zoho-campaigns/
│   ├── subscribe/route.ts     # POST - Subscribe email to list
│   └── lists/route.ts         # GET - Fetch all mailing lists
│
├── components/
│   └── ContactFormSection.tsx # Email subscription form component
│
└── docs/
    └── ZOHO_CAMPAIGNS_INTEGRATION.md  # This file
```

### Key Classes & Functions

#### ZohoCampaignsAPI Class

**File:** `/lib/zoho/campaigns-api.ts`

```typescript
class ZohoCampaignsAPI {
  // Initialize API client with OAuth token
  private async initializeClient(): Promise<void>

  // Subscribe email to mailing list
  async subscribeContact(email: string, listKey?: string): Promise<Response>

  // Add contact to list (bulk operation)
  async addContactToList(email: string, listKey?: string): Promise<Response>

  // Get all mailing lists
  async getMailingLists(): Promise<Response>

  // Check if contact exists
  async checkContactExists(email: string, listKey?: string): Promise<boolean>
}

// Singleton instance
export const zohoCampaignsAPI = new ZohoCampaignsAPI();
```

#### API Response Types

```typescript
interface SubscribeResponse {
  success: boolean;
  message: string;
  isDuplicate?: boolean;
}

interface ZohoBulkAddResponse {
  status: 'success' | 'error';
  code: '0' | string;
  ignored_contacts: string[];      // Domain rejected
  existing_contacts: string[];     // Already in list
  readd_contacts: string[];        // Previously unsubscribed
  listkey: string;
  listname: string;
}
```

---

## Important Notes

### Zoho API Rate Limits

Zoho Campaigns API has the following rate limits:

- **Free Plan:** 100 API calls per day
- **Paid Plans:** Higher limits based on plan

**Recommendation:** Monitor API usage in production.

### Email Domain Validation

Zoho Campaigns validates email domains before accepting contacts:

1. **MX Record Check:** Domain must have valid mail exchange records
2. **Reputation Check:** Domain must have good sender reputation
3. **Spam Filter:** Rejects known temporary/disposable email services

**Best Practices:**
- Use well-known email providers for testing (Gmail, Yahoo)
- For custom domains, ensure proper email infrastructure
- Handle rejection gracefully with user-friendly error messages

### Data Privacy

- **No Local Storage:** Emails are NOT stored in the local database
- **Direct to Zoho:** All data goes directly to Zoho Campaigns
- **GDPR Compliance:** Ensure your Zoho account is GDPR compliant
- **Unsubscribe:** Users can unsubscribe via Zoho Campaigns emails

### Production Deployment

**Checklist before deploying:**

1. ✅ Set `ZOHO_CAMPAIGNS_LIST_KEY` in production environment
2. ✅ Verify OAuth credentials work in production
3. ✅ Test subscription flow in production
4. ✅ Update Zoho OAuth redirect URLs for production domain
5. ✅ Monitor API error rates
6. ✅ Set up alerts for OAuth token expiration

**Environment Variables for Production:**

```bash
# .env.production
ZOHO_CAMPAIGNS_LIST_KEY="your-production-list-key"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

---

## API Reference

### Zoho Campaigns API v1.1

**Base URL:** `https://campaigns.zoho.in/api/v1.1`

**Authentication:** OAuth 2.0 Bearer Token
```
Authorization: Zoho-oauthtoken YOUR_ACCESS_TOKEN
```

### Endpoints Used

#### Add Contacts in Bulk
```
POST /addlistsubscribersinbulk
Content-Type: application/x-www-form-urlencoded

Parameters:
- resfmt: JSON
- listkey: YOUR_LIST_KEY
- emailids: comma-separated-emails
```

#### Get Mailing Lists
```
GET /getmailinglists
Parameters:
- resfmt: JSON
- sort: asc
- fromindex: 1
- range: 100
```

**Documentation:** [Zoho Campaigns API Docs](https://www.zoho.com/campaigns/help/developers/api-v1.1.html)

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check contact count growth in Zoho Campaigns
- Monitor error logs for failed subscriptions

**Monthly:**
- Review OAuth token expiration dates
- Clean up test contacts from mailing lists
- Verify API rate limit usage

**Quarterly:**
- Review and update documentation
- Test integration with latest Next.js version
- Review Zoho API for any changes

### Monitoring

**Key Metrics to Track:**

1. **Subscription Success Rate:** % of successful vs failed subscriptions
2. **Duplicate Rate:** % of duplicate email submissions
3. **Domain Rejection Rate:** % of emails rejected by Zoho
4. **API Response Time:** Average time for subscription API calls
5. **OAuth Token Failures:** Count of authentication errors

**Recommended Tools:**
- Application monitoring (e.g., Sentry, DataDog)
- API monitoring dashboard
- Zoho Campaigns analytics

---

## Support & Resources

### Internal Resources

- **Zoho CRM Integration:** See existing CRM docs
- **Admin Panel:** `/admin` for OAuth management
- **API Testing:** Use `/api/zoho-campaigns/lists` to verify setup

### External Resources

- [Zoho Campaigns API Documentation](https://www.zoho.com/campaigns/help/developers/api-v1.1.html)
- [Zoho OAuth Documentation](https://www.zoho.com/accounts/protocol/oauth.html)
- [Zoho API Status](https://status.zoho.com/)
- [Zoho Support](https://help.zoho.com/portal/en/home)

### Contact

For questions about this integration:
- **Technical Issues:** Check troubleshooting section above
- **Zoho Account Issues:** Contact Zoho support
- **Code Changes:** Review git history for implementation details

---

## Changelog

### v1.0.0 - January 2025
- ✅ Initial implementation
- ✅ Direct Zoho Campaigns integration
- ✅ Duplicate detection
- ✅ Toast notifications
- ✅ Multiple mailing list support
- ✅ OAuth authentication
- ✅ Production ready

### Future Enhancements (Planned)

- [ ] Name extraction from email addresses
- [ ] Custom field support (phone, company, etc.)
- [ ] Multiple list subscription
- [ ] Unsubscribe functionality
- [ ] Analytics dashboard
- [ ] A/B testing for forms

---

## Appendix

### Example API Responses

#### Successful Subscription
```json
{
  "status": "success",
  "code": "0",
  "ignored_contacts": [],
  "existing_contacts": [],
  "readd_contacts": [],
  "listkey": "3z1e41904...",
  "listname": "Bower School TestList",
  "version": "1.1",
  "url": "/api/v1.1/addlistsubscribersinbulk"
}
```

#### Duplicate Contact
```json
{
  "status": "success",
  "code": "0",
  "ignored_contacts": [],
  "existing_contacts": ["user@gmail.com"],
  "readd_contacts": [],
  "listkey": "3z1e41904...",
  "listname": "Bower School TestList"
}
```

#### Domain Rejected
```json
{
  "status": "success",
  "code": "0",
  "ignored_contacts": ["user@invaliddomain.com"],
  "existing_contacts": [],
  "readd_contacts": [],
  "listkey": "3z1e41904...",
  "listname": "Bower School TestList"
}
```

---

**End of Documentation**

Last Updated: January 2025
Version: 1.0.0
Author: Development Team
