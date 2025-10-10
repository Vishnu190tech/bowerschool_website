# Zoho Campaigns Integration - Quick Reference

## 🚀 Quick Start

### 1. Environment Setup
```bash
# Add to .env.local
ZOHO_CAMPAIGNS_LIST_KEY="your-list-key-from-zoho"
```

### 2. Get List Key
Zoho Campaigns → Contacts → Manage Lists → Your List → Setup → View List Key

### 3. Use Component
```tsx
import ContactFormSection from '@/components/ContactFormSection';

<ContactFormSection theme="ug" />
```

---

## 📡 API Endpoints

### Subscribe Email
```bash
POST /api/zoho-campaigns/subscribe
Body: { "email": "user@example.com" }
```

### Get Lists
```bash
GET /api/zoho-campaigns/lists
```

---

## 🧪 Quick Tests

```bash
# Test subscription
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@gmail.com"}'

# Check contact count
curl http://localhost:3000/api/zoho-campaigns/lists | jq '.lists[0].noofcontacts'
```

---

## ✅ Email Providers Status

| Provider | Status | Notes |
|----------|--------|-------|
| Gmail | ✅ Works | Recommended for testing |
| Yahoo | ✅ Works | Reliable |
| Outlook | ⚠️ Sometimes | May be rejected |
| Hotmail | ⚠️ Sometimes | May be rejected |
| Custom Domains | ❌ Usually Rejected | Need proper MX records |

---

## 🐛 Common Issues

### No Access Token
```bash
Solution: Go to /admin → Reconnect Zoho
```

### Email Rejected
```bash
Reason: Zoho validates email domains
Solution: Use Gmail/Yahoo for testing
```

### No List Key
```bash
Solution: Add ZOHO_CAMPAIGNS_LIST_KEY to .env.local
```

---

## 📂 File Locations

| File | Purpose |
|------|---------|
| `/lib/zoho/campaigns-api.ts` | API wrapper class |
| `/app/api/zoho-campaigns/subscribe/route.ts` | Subscribe endpoint |
| `/components/ContactFormSection.tsx` | Form component |
| `/lib/zoho/types.ts` | OAuth scopes |

---

## 🔑 Required OAuth Scopes

```typescript
'ZohoCampaigns.contact.ALL',
'ZohoCampaigns.campaign.ALL'
```

Add to: `/lib/zoho/types.ts`

---

## 💡 Response Examples

### Success
```json
{
  "success": true,
  "message": "Thank you! You have been successfully subscribed."
}
```

### Duplicate
```json
{
  "success": false,
  "isDuplicate": true,
  "message": "This email is already registered in our mailing list."
}
```

### Rejected
```json
{
  "success": false,
  "message": "Please use a valid email address from a recognized provider"
}
```

---

## 📊 Data Flow

```
User → ContactFormSection → API Route → ZohoCampaignsAPI → Zoho
                                ↓
                         OAuth from Database
```

---

## 🔗 Important Links

- [Full Documentation](./ZOHO_CAMPAIGNS_INTEGRATION.md)
- [Zoho API Docs](https://www.zoho.com/campaigns/help/developers/api-v1.1.html)
- [Admin Panel](http://localhost:3000/admin)

---

## 📞 Quick Debug Commands

```bash
# Check if dev server is running
curl http://localhost:3000/api/zoho-campaigns/lists

# Test with valid email
curl -X POST http://localhost:3000/api/zoho-campaigns/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "yourtest@gmail.com"}'

# Check server logs
yarn dev
# Watch for: [ZohoCampaignsAPI] logs
```

---

## ⚡ Production Checklist

- [ ] Set `ZOHO_CAMPAIGNS_LIST_KEY` in production
- [ ] Verify OAuth works in production
- [ ] Test subscription flow
- [ ] Update redirect URLs for production domain
- [ ] Monitor API error rates

---

**For detailed information, see:** [ZOHO_CAMPAIGNS_INTEGRATION.md](./ZOHO_CAMPAIGNS_INTEGRATION.md)
