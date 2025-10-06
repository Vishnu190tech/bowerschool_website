# ScholarshipFormSection - Dynamic Form Component

A fully dynamic, themeable form component for scholarship/lead generation with multiple color themes and customizable API endpoints.

## Features

- 🎨 **4 Color Themes**: Scholarship (default), Lead, Seed, and UG
- 🔗 **Dynamic API Endpoints**: Configure POST request URL
- ⏱️ **Optional Countdown Timer**: Show/hide countdown with custom deadline
- 📝 **Fixed Form Fields**: Name, Email, Mobile (consistent across all themes)
- 🎭 **Theme-based Styling**: All colors, gradients, and accents change per theme
- ✅ **Loading States**: Built-in submit, success, and error handling
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized

## Usage

### Basic Example (Default Theme)
```tsx
import ScholarshipFormSection from '@/components/ScholarshipFormSection';

export default function Page() {
  return (
    <ScholarshipFormSection />
  );
}
```

### Lead Theme Example
```tsx
<ScholarshipFormSection
  theme="lead"
  apiEndpoint="/api/leads/submit"
  title="Join our LEAD Program - Limited Seats Available!"
  showCountdown={true}
/>
```

### Seed Theme Example
```tsx
<ScholarshipFormSection
  theme="seed"
  apiEndpoint="/api/seed/submit"
  title="Apply for SEED Program - Early Bird Offer Ends Soon!"
  showCountdown={true}
/>
```

### UG Program Theme Example
```tsx
<ScholarshipFormSection
  theme="ug"
  apiEndpoint="/api/ug-program/submit"
  title="Apply for Undergraduate Program - Get Up To 90% Scholarship"
  showCountdown={true}
/>
```

### Without Countdown Timer
```tsx
<ScholarshipFormSection
  theme="scholarship"
  apiEndpoint="/api/general-inquiry/submit"
  title="Contact Us for More Information"
  showCountdown={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'scholarship' \| 'lead' \| 'seed' \| 'ug'` | `'scholarship'` | Color theme for the form |
| `apiEndpoint` | `string` | `'/api/scholarship/submit'` | API endpoint for form submission |
| `title` | `string` | `'Book A Call With Our Advisor...'` | Main heading text |
| `deadline` | `Date \| string` | `undefined` | Countdown deadline (future feature) |
| `showCountdown` | `boolean` | `true` | Show/hide countdown timer |
| `privacyPolicyUrl` | `string` | `'https://...'` | Privacy policy link URL |
| `termsOfUseUrl` | `string` | `'https://...'` | Terms of use link URL |

## Color Themes

### Scholarship Theme (Default)
- **Primary Color**: `#3232e6`
- **Secondary Color**: `#4242FF`
- **Use Case**: General scholarship applications

### Lead Theme
- **Primary Color**: `#A8F326` (Lime Green)
- **Secondary Color**: `#A8F326`
- **Use Case**: Lead generation campaigns

### Seed Theme
- **Primary Color**: `#FF8829` (Orange)
- **Secondary Color**: `#FF8829`
- **Use Case**: SEED program applications

### UG Theme
- **Primary Color**: `#4242FF`
- **Secondary Color**: `#4242FF`
- **Use Case**: Undergraduate program applications

## API Integration

The form submits data as JSON with the following structure:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+1234567890",
  "consent": true,
  "formType": "lead"
}
```

### Expected API Response

**Success Response (200)**:
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Error Response (400/500)**:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Styling Customization

All theme colors are centralized in the `FORM_THEMES` object within the component:

```typescript
const FORM_THEMES: Record<ThemeType, FormTheme> = {
  scholarship: {
    primary: '#3232e6',
    secondary: '#4242FF',
    gradient: 'from-white/20 via-transparent to-[#4242ff]/16',
    hover: '#3232e6',
    tint: 'bg-[#4242ff]/10 border-[#4242ff] text-[#4242ff]',
  },
  // ... other themes
};
```

### What Changes Per Theme?

- ✅ Countdown timer text colors
- ✅ Form stepper (step indicators) colors
- ✅ Input field focus borders
- ✅ Submit button background and hover
- ✅ Link colors (Privacy Policy, Terms)
- ✅ Form background gradient (desktop)

### What Stays the Same?

- ❌ Input fields (always gray with theme-colored borders on focus)
- ❌ Form structure and layout
- ❌ Field names (name, email, mobile)
- ❌ Validation rules

## Implementation Examples

### Example 1: Program Pages
Update existing program pages to use the appropriate theme:

**`/app/programs/lead/page.tsx`**
```tsx
<ScholarshipFormSection
  theme="lead"
  apiEndpoint="/api/leads/submit"
  title="Join LEAD Program - Transform Your Future!"
/>
```

**`/app/programs/k12-seed/page.tsx`**
```tsx
<ScholarshipFormSection
  theme="seed"
  apiEndpoint="/api/seed/submit"
  title="K12 SEED Program - Limited Time Offer!"
/>
```

**`/app/programs/ug/page.tsx`**
```tsx
<ScholarshipFormSection
  theme="ug"
  apiEndpoint="/api/ug-program/submit"
  title="Apply for UG Program - Up to 90% Scholarship"
/>
```

### Example 2: Conditional Rendering
```tsx
const programType = 'lead'; // from props or route

<ScholarshipFormSection
  theme={programType}
  apiEndpoint={`/api/${programType}/submit`}
  title={getTitleForProgram(programType)}
/>
```

## Form States

The component handles three main states:

1. **Default State**: Form is ready for input
2. **Submitting State**: Button shows "Submitting..." and is disabled
3. **Success State**: Button shows "Success!" and form auto-resets after 3s
4. **Error State**: Error message displayed below button

## Responsive Behavior

- **Mobile (< 1024px)**:
  - Single column layout
  - Compact countdown timer (4-column grid)
  - Smaller form elements
  - Title appears above countdown

- **Desktop (≥ 1024px)**:
  - Two-column layout (title/timer | form)
  - Large countdown boxes (150x150px)
  - Form has glass morphism effect
  - Gradient background visible

## TypeScript Support

Full TypeScript support with exported types:

```typescript
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface ScholarshipFormSectionProps {
  theme?: ThemeType;
  apiEndpoint?: string;
  title?: string;
  deadline?: Date | string;
  showCountdown?: boolean;
  privacyPolicyUrl?: string;
  termsOfUseUrl?: string;
}
```

## Notes

- Form fields (name, email, mobile) remain consistent across all themes
- Only visual styling changes between themes
- Input fields use the same gray background with theme-colored borders on focus
- API endpoint must be configured for each use case
- Form auto-resets 3 seconds after successful submission
