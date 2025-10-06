# How to Update Existing Pages with Dynamic Form

This guide shows you how to update the existing program pages to use the new themed form component.

## Pages That Use ScholarshipFormSection

Based on the codebase, these pages currently use the form:
- `/app/programs/masterclasses/page.tsx`
- `/app/page.tsx` (homepage)
- `/app/mentors/page.tsx`
- `/app/programs/k12/page.tsx`
- `/app/programs/k12-school/page.tsx`
- `/app/programs/lead/page.tsx` ← Use **Lead** theme
- `/app/programs/k12-seed/page.tsx` ← Use **Seed** theme
- `/app/programs/ug/page.tsx` ← Use **UG** theme

---

## Update Examples

### 1. LEAD Program Page
**File**: `/app/programs/lead/page.tsx`

**Before**:
```tsx
<ScholarshipFormSection />
```

**After**:
```tsx
<ScholarshipFormSection
  theme="lead"
  apiEndpoint="/api/leads/submit"
  title="Join Our LEAD Program - Transform Your Future Today!"
/>
```

**Color**: `#A8F326` (Lime Green)

---

### 2. SEED Program Page
**File**: `/app/programs/k12-seed/page.tsx`

**Before**:
```tsx
<ScholarshipFormSection />
```

**After**:
```tsx
<ScholarshipFormSection
  theme="seed"
  apiEndpoint="/api/seed/submit"
  title="Apply for K12 SEED Program - Limited Time Offer!"
/>
```

**Color**: `#FF8829` (Orange)

---

### 3. UG Program Page
**File**: `/app/programs/ug/page.tsx`

**Before**:
```tsx
<ScholarshipFormSection />
```

**After**:
```tsx
<ScholarshipFormSection
  theme="ug"
  apiEndpoint="/api/ug-program/submit"
  title="Apply for Undergraduate Program - Get Up To 90% Scholarship"
/>
```

**Color**: `#4242FF` (Blue)

---

### 4. Other Pages (Keep Default)
**Files**:
- `/app/page.tsx`
- `/app/programs/k12/page.tsx`
- `/app/programs/k12-school/page.tsx`
- `/app/programs/masterclasses/page.tsx`
- `/app/mentors/page.tsx`

**Current**:
```tsx
<ScholarshipFormSection />
```

**Keep as is** (uses default `scholarship` theme with `#3232e6` color)

Or optionally be explicit:
```tsx
<ScholarshipFormSection
  theme="scholarship"
  apiEndpoint="/api/scholarship/submit"
  title="Book A Call With Our Advisor By April 10th And Get Up To 90% Scholarships"
/>
```

---

## Step-by-Step Update Process

### Step 1: Identify the Page Theme
Determine which theme each page should use based on the program type:
- **LEAD program** → `theme="lead"`
- **SEED program** → `theme="seed"`
- **UG program** → `theme="ug"`
- **All others** → `theme="scholarship"` (default)

### Step 2: Update the Component
Replace the existing `<ScholarshipFormSection />` with the themed version.

### Step 3: Configure API Endpoint
Set the `apiEndpoint` prop to match your backend API route:
```tsx
apiEndpoint="/api/leads/submit"  // for LEAD
apiEndpoint="/api/seed/submit"   // for SEED
apiEndpoint="/api/ug-program/submit"  // for UG
```

### Step 4: Customize Title (Optional)
Set a custom title that matches the program:
```tsx
title="Join Our LEAD Program - Transform Your Future!"
```

### Step 5: Test
1. Navigate to the page
2. Verify the correct theme colors appear
3. Test form submission (check API endpoint)
4. Check responsive design on mobile/tablet/desktop

---

## Quick Reference: Theme Colors

| Theme | Primary Color | Use Case |
|-------|--------------|----------|
| `scholarship` | `#3232e6` | Default, general applications |
| `lead` | `#A8F326` | LEAD program |
| `seed` | `#FF8829` | SEED program |
| `ug` | `#4242FF` | UG program |

---

## Testing Checklist

After updating each page, verify:

- [ ] Correct theme color appears in countdown timer
- [ ] Submit button has correct theme color
- [ ] Input focus borders use theme color
- [ ] Links (privacy policy, terms) use theme color
- [ ] Form stepper indicators use theme color
- [ ] Gradient background (desktop) uses theme color
- [ ] Form submits to correct API endpoint
- [ ] Mobile view works correctly
- [ ] Desktop view works correctly

---

## Demo Page

Test all themes at: **http://localhost:3003/form-demo**

The demo page lets you:
- Switch between all 4 themes
- See live color changes
- View usage examples
- Check API configuration
- Test responsive design

---

## Need Help?

- **Full Documentation**: See `/components/ScholarshipFormSection.README.md`
- **Component Source**: `/components/ScholarshipFormSection.tsx`
- **Demo Page**: `/app/form-demo/page.tsx`
- **Summary**: `/FORM_IMPLEMENTATION_SUMMARY.md`

---

## Example: Complete Update

**File**: `/app/programs/lead/page.tsx`

```tsx
import ScholarshipFormSection from '@/components/ScholarshipFormSection';

export default function LeadProgramPage() {
  return (
    <div>
      {/* Other page content */}

      <ScholarshipFormSection
        theme="lead"
        apiEndpoint="/api/leads/submit"
        title="Join Our LEAD Program - Transform Your Future Today!"
        showCountdown={true}
        privacyPolicyUrl="https://example.com/privacy"
        termsOfUseUrl="https://example.com/terms"
      />

      {/* More page content */}
    </div>
  );
}
```

---

**Last Updated**: 2025-10-06
