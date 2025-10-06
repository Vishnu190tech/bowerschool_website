# Visual Theme Guide - ScholarshipFormSection

A visual guide showing what changes between each theme.

---

## 🎨 Theme 1: Scholarship (Default)

### Colors
- **Primary**: `#3232e6`
- **Secondary**: `#4242FF`
- **Hover**: `#3232e6`

### Visual Elements
```
┌─────────────────────────────────────────────┐
│  Countdown Timer (Desktop)                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │  01  │ │  01  │ │  46  │ │  24  │       │
│  │ Days │ │ Hrs  │ │ Min  │ │ Sec  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│   #3232e6  #3232e6  #3232e6  #3232e6       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Form Stepper                               │
│  ① ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ② │
│  Contact (#4242FF)              Submit      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Submit Button                              │
│  ┌─────────────────────────────────────┐   │
│  │         Submit (#4242FF)            │   │
│  └─────────────────────────────────────┘   │
│  Hover: #3232e6                             │
└─────────────────────────────────────────────┘
```

### Usage
```tsx
<ScholarshipFormSection />
// or
<ScholarshipFormSection theme="scholarship" />
```

---

## 🎨 Theme 2: LEAD

### Colors
- **Primary**: `#A8F326` 🟢
- **Secondary**: `#A8F326` 🟢
- **Hover**: `#8FD920` 🟢

### Visual Elements
```
┌─────────────────────────────────────────────┐
│  Countdown Timer (Desktop)                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │  01  │ │  01  │ │  46  │ │  24  │       │
│  │ Days │ │ Hrs  │ │ Min  │ │ Sec  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│   #A8F326  #A8F326  #A8F326  #A8F326       │
│   (Lime)   (Lime)   (Lime)   (Lime)        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Form Stepper                               │
│  ① ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ② │
│  Contact (#A8F326)              Submit      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Submit Button                              │
│  ┌─────────────────────────────────────┐   │
│  │         Submit (#A8F326)            │   │
│  └─────────────────────────────────────┘   │
│  Hover: #8FD920                             │
└─────────────────────────────────────────────┘
```

### Usage
```tsx
<ScholarshipFormSection
  theme="lead"
  apiEndpoint="/api/leads/submit"
  title="Join Our LEAD Program!"
/>
```

### Best For
- Lead generation campaigns
- Growth-focused programs
- Fresh, energetic branding

---

## 🎨 Theme 3: SEED

### Colors
- **Primary**: `#FF8829` 🟠
- **Secondary**: `#FF8829` 🟠
- **Hover**: `#E77620` 🟠

### Visual Elements
```
┌─────────────────────────────────────────────┐
│  Countdown Timer (Desktop)                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │  01  │ │  01  │ │  46  │ │  24  │       │
│  │ Days │ │ Hrs  │ │ Min  │ │ Sec  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│   #FF8829  #FF8829  #FF8829  #FF8829       │
│   (Orange) (Orange) (Orange) (Orange)      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Form Stepper                               │
│  ① ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ② │
│  Contact (#FF8829)              Submit      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Submit Button                              │
│  ┌─────────────────────────────────────┐   │
│  │         Submit (#FF8829)            │   │
│  └─────────────────────────────────────┘   │
│  Hover: #E77620                             │
└─────────────────────────────────────────────┘
```

### Usage
```tsx
<ScholarshipFormSection
  theme="seed"
  apiEndpoint="/api/seed/submit"
  title="Apply for SEED Program!"
/>
```

### Best For
- SEED program applications
- K12 programs
- Warm, welcoming branding

---

## 🎨 Theme 4: UG

### Colors
- **Primary**: `#4242FF` 🔵
- **Secondary**: `#4242FF` 🔵
- **Hover**: `#3232e6` 🔵

### Visual Elements
```
┌─────────────────────────────────────────────┐
│  Countdown Timer (Desktop)                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │  01  │ │  01  │ │  46  │ │  24  │       │
│  │ Days │ │ Hrs  │ │ Min  │ │ Sec  │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│   #4242FF  #4242FF  #4242FF  #4242FF       │
│   (Blue)   (Blue)   (Blue)   (Blue)        │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Form Stepper                               │
│  ① ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ② │
│  Contact (#4242FF)              Submit      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Submit Button                              │
│  ┌─────────────────────────────────────┐   │
│  │         Submit (#4242FF)            │   │
│  └─────────────────────────────────────┘   │
│  Hover: #3232e6                             │
└─────────────────────────────────────────────┘
```

### Usage
```tsx
<ScholarshipFormSection
  theme="ug"
  apiEndpoint="/api/ug-program/submit"
  title="Apply for UG Program!"
/>
```

### Best For
- Undergraduate programs
- University applications
- Professional, trustworthy branding

---

## 📊 What Changes Per Theme?

### ✅ Elements That Change Color

| Element | Location | Theme-Based |
|---------|----------|-------------|
| Countdown Timer Numbers | Desktop & Mobile | ✅ Primary |
| Countdown Timer Labels | Desktop & Mobile | ✅ Primary/Secondary |
| Form Stepper Circle (Active) | Desktop & Mobile | ✅ Tint |
| Form Stepper Text (Active) | Desktop & Mobile | ✅ Secondary |
| Input Focus Border | Desktop & Mobile | ✅ Secondary |
| Submit Button BG | Desktop & Mobile | ✅ Secondary |
| Submit Button Hover | Desktop & Mobile | ✅ Hover |
| Privacy Policy Link | Desktop & Mobile | ✅ Secondary |
| Terms of Use Link | Desktop & Mobile | ✅ Secondary |
| Form Gradient BG | Desktop Only | ✅ Gradient |

### ❌ Elements That Stay the Same

| Element | Styling |
|---------|---------|
| Input Fields | Gray background (#F9FAFB) |
| Input Borders (Unfocused) | Gray (#D1D5DB) |
| Input Text | Dark gray (#111827) |
| Placeholder Text | Gray (#6B7280) |
| Form Background | White |
| Section Background | Dark (#181a1c) |
| Grid Pattern | SVG background |

---

## 🎯 Side-by-Side Comparison

```
┌────────────────┬────────────────┬────────────────┬────────────────┐
│  Scholarship   │     LEAD       │     SEED       │      UG        │
├────────────────┼────────────────┼────────────────┼────────────────┤
│   #3232e6 🔵   │  #A8F326 🟢    │  #FF8829 🟠    │  #4242FF 🔵    │
│   Deep Blue    │  Lime Green    │   Orange       │  Bright Blue   │
├────────────────┼────────────────┼────────────────┼────────────────┤
│   Default      │  Lead Gen      │  SEED/K12      │  Undergraduate │
│   General      │  Growth        │  Warm          │  Professional  │
│   Trustworthy  │  Energetic     │  Welcoming     │  Academic      │
└────────────────┴────────────────┴────────────────┴────────────────┘
```

---

## 🧪 Testing Guide

### Visual Testing Checklist

For each theme, verify these elements show the correct color:

#### Desktop View (≥ 1024px)
- [ ] Large countdown timer numbers
- [ ] Countdown timer labels
- [ ] Form stepper active circle
- [ ] Form stepper active text
- [ ] Input field focus borders
- [ ] Submit button background
- [ ] Submit button hover effect
- [ ] Privacy policy link
- [ ] Terms of use link
- [ ] Form gradient background

#### Mobile View (< 1024px)
- [ ] Compact countdown grid colors
- [ ] Form stepper mobile layout
- [ ] Input focus borders
- [ ] Submit button colors
- [ ] Link colors

### Browser Testing
Test in:
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 📱 Responsive Comparison

### Mobile (< 1024px)
```
┌─────────────────────────────┐
│  Title                      │
│                             │
│  ┌────┬────┬────┬────┐     │
│  │ 01 │ 01 │ 46 │ 24 │     │
│  │Hrs │Days│Min │Sec │     │
│  └────┴────┴────┴────┘     │
│  (All in theme color)      │
│                             │
│  ┌─────────────────────┐   │
│  │  Form Container     │   │
│  │  ① ──────────── ②   │   │
│  │  [Name Input]       │   │
│  │  [Email Input]      │   │
│  │  [Mobile Input]     │   │
│  │  [Submit Button]    │   │
│  │  (Theme colored)    │   │
│  └─────────────────────┘   │
└─────────────────────────────┘
```

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────┐  ┌──────────────────────────────┐  │
│  │ Title              │  │  Form Container              │  │
│  │                    │  │  ① ───────────────────── ②   │  │
│  │  ┌────┬────┬────┬ │  │  [Name Input]                │  │
│  │  │ 01 │ 01 │ 46 │ │  │  [Email Input]               │  │
│  │  │Days│Hrs │Min │ │  │  [Mobile Input]              │  │
│  │  └────┴────┴────┴ │  │  [Submit Button]             │  │
│  │  (Large boxes)    │  │  (All theme colored)         │  │
│  │  (Theme colored)  │  │                              │  │
│  └────────────────────┘  └──────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

1. **View Demo**: http://localhost:3003/form-demo
2. **Choose Theme**: Select based on program type
3. **Copy Code**: Use the example from the demo
4. **Test**: Verify colors and functionality
5. **Deploy**: Push changes to production

---

## 📖 More Resources

- **Full Documentation**: `/components/ScholarshipFormSection.README.md`
- **Implementation Summary**: `/FORM_IMPLEMENTATION_SUMMARY.md`
- **Update Guide**: `/HOW_TO_UPDATE_EXISTING_PAGES.md`
- **Source Code**: `/components/ScholarshipFormSection.tsx`

---

**Last Updated**: 2025-10-06
**Themes**: 4 (Scholarship, Lead, Seed, UG)
**Status**: ✅ Production Ready
