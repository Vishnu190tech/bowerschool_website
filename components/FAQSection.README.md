# FAQSection Component - Dynamic & Themeable

A fully dynamic, themeable FAQ accordion component with 4 color themes featuring unique radial background gradients and 17 comprehensive FAQs.

## Features

- 🎨 **4 Color Themes**: Scholarship, Lead, Seed (default), and UG
- 🌈 **Theme-Based Radial Gradients**: Unique background gradients per theme
- 📝 **17 Enhanced Default FAQs**: Comprehensive, detailed answers
- 🗂️ **4 Categories**: General Questions, Eligibility, Admissions, Fees/Refund
- 💫 **Animated Gradient Blobs**: Theme-colored pulsing decorative elements
- 📱 **Fully Responsive**: Mobile and desktop optimized
- ✨ **Smooth Animations**: Expand/collapse with Framer Motion

## Usage

### Basic Example (Default SEED Theme)
```tsx
import FAQSection from '@/components/FAQSection';

export default function Page() {
  return <FAQSection />;
}
```

### Scholarship Theme
```tsx
<FAQSection theme="scholarship" />
```

### LEAD Theme
```tsx
<FAQSection theme="lead" />
```

### UG Program Theme
```tsx
<FAQSection theme="ug" />
```

### Custom FAQ Data
```tsx
const customFAQs = {
  'Technical': [
    {
      id: 1,
      number: '01',
      question: 'What technologies will I learn?',
      answer: 'You will learn modern web technologies including...'
    },
    // ... more FAQs
  ],
  'Career': [
    // ... FAQs
  ]
};

<FAQSection
  theme="ug"
  faqData={customFAQs}
  categories={['Technical', 'Career']}
  defaultCategory="Technical"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'scholarship' \| 'lead' \| 'seed' \| 'ug'` | `'seed'` | Color theme |
| `faqData` | `FAQData` | 17 defaults | FAQ data object |
| `categories` | `string[]` | 4 defaults | Category array |
| `defaultCategory` | `string` | `'General Questions'` | Initial active category |
| `title` | `string` | `undefined` | Optional section title |

## Interfaces

```typescript
interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

interface FAQData {
  [category: string]: FAQItem[];
}

interface FAQSectionProps {
  theme?: 'scholarship' | 'lead' | 'seed' | 'ug';
  faqData?: FAQData;
  categories?: string[];
  defaultCategory?: string;
  title?: string;
}
```

## Color Themes

### Scholarship Theme (Blue)
- **Primary**: `#3232e6` (Deep Blue)
- **Secondary**: `#4242FF` (Bright Blue)
- **Gradient**: Blue radial ellipse from bottom center
- **Use Case**: Scholarship programs

### LEAD Theme (Lime Green)
- **Primary**: `#A8F326` (Lime Green)
- **Secondary**: `#8FD920` (Dark Lime)
- **Gradient**: Lime green radial ellipse
- **Use Case**: LEAD programs

### SEED Theme (Orange) - DEFAULT
- **Primary**: `#FF8829` (Orange)
- **Secondary**: `#FFBF29` (Golden Orange)
- **Gradient**: Orange radial ellipse
- **Use Case**: SEED/K12 programs

### UG Theme (Bright Blue)
- **Primary**: `#4242FF` (Bright Blue)
- **Secondary**: `#3232e6` (Deep Blue)
- **Gradient**: Bright blue radial ellipse
- **Use Case**: Undergraduate programs

## What Changes Per Theme?

### ✅ Theme-Dependent Elements
1. **Radial background gradient** (ellipse from bottom center)
2. **Sidebar border color**
3. **Question hover color**
4. **Chevron icon hover color**
5. **Top-right animated blob** (gradient circle)
6. **Bottom-left animated blob** (gradient circle)

### ❌ Consistent Elements
- Background base color (`#170c01` dark brown)
- Text colors (white/light variants)
- Card backdrop blur
- Layout and spacing
- Animation timings
- Border opacity

## Default FAQ Content

### 17 Comprehensive FAQs Across 4 Categories

#### General Questions (5 FAQs)
1. Who is eligible to apply for Bower programs?
2. Are there specific sectors applicants must focus on?
3. Is there international exposure in programs?
4. What is the duration of each program?
5. What support after completing programs?

#### Eligibility (4 FAQs)
1. What are minimum educational requirements?
2. Can international students apply?
3. Is work experience mandatory for LEAD?
4. Are there age restrictions?

#### Admissions (4 FAQs)
1. What is the admission process?
2. When does the next batch start?
3. How competitive is selection?
4. Can I apply for multiple programs?

#### Fees/Refund (4 FAQs)
1. What is the fee structure?
2. Are scholarships available?
3. What payment options exist?
4. What is the refund policy?

## Radial Gradient System

Each theme features a unique radial gradient:

### Scholarship (Blue)
```css
radial-gradient(ellipse at center bottom,
  rgba(50, 50, 230, 0.1) 0%,
  rgba(66, 66, 255, 0.05) 51%,
  transparent 100%)
```

### LEAD (Lime)
```css
radial-gradient(ellipse at center bottom,
  rgba(168, 243, 38, 0.1) 0%,
  rgba(143, 217, 32, 0.05) 51%,
  transparent 100%)
```

### SEED (Orange)
```css
radial-gradient(ellipse at center bottom,
  rgba(255, 136, 41, 0.1) 0%,
  rgba(255, 191, 41, 0.05) 51%,
  transparent 100%)
```

### UG (Bright Blue)
```css
radial-gradient(ellipse at center bottom,
  rgba(66, 66, 255, 0.1) 0%,
  rgba(50, 50, 230, 0.05) 51%,
  transparent 100%)
```

## Examples

### Example 1: Scholarship Page
```tsx
<FAQSection
  theme="scholarship"
  defaultCategory="Admissions"
/>
```

### Example 2: LEAD Program
```tsx
<FAQSection
  theme="lead"
  defaultCategory="Eligibility"
/>
```

### Example 3: SEED/K12 Program
```tsx
<FAQSection
  theme="seed"
  defaultCategory="General Questions"
/>
```

### Example 4: UG Program
```tsx
<FAQSection
  theme="ug"
  defaultCategory="Fees/Refund"
/>
```

## Animated Elements

### Decorative Gradient Blobs
Two animated, pulsing gradient circles:

**Top-Right Blob:**
- Size: Responsive (32-128px)
- Position: Top-right corner
- Animation: Scale 1 → 1.2 → 1 (5s loop)
- Opacity: 0.3 → 0.5 → 0.3
- Color: Theme blob1Color

**Bottom-Left Blob:**
- Size: Responsive (40-160px)
- Position: Bottom-left area
- Animation: Scale 1 → 1.3 → 1 (6s loop)
- Opacity: 0.3 → 0.5 → 0.3
- Color: Theme blob2Color

## Interactive Features

### Accordion Behavior
- Click to expand/collapse
- Smooth height animation
- Rotate chevron icon
- One or multiple items can be open
- First item expanded by default

### Category Switching
- Click category to switch
- Smooth fade transition
- Horizontal scroll on mobile
- Vertical stack on desktop

### Hover Effects
- Question text changes to theme color
- Chevron icon changes to theme color
- Smooth color transitions

## Responsive Behavior

### Mobile (< 1024px)
- Horizontal scrolling categories
- Compact spacing
- Smaller text sizes
- Adjusted blob sizes

### Desktop (≥ 1024px)
- Sidebar layout
- Vertical category list
- Larger text and spacing
- Full gradient effects

## Performance

- Optimized animations with Framer Motion
- Efficient expand/collapse transitions
- GPU-accelerated blur effects
- Smooth 60fps performance

## Accessibility

- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels on buttons
- Semantic HTML structure
- Focus indicators

## TypeScript Support

Full TypeScript support with exported types:

```typescript
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface FAQTheme {
  primary: string;
  secondary: string;
  radialGradient: string;
  blob1Color: string;
  blob2Color: string;
  borderColor: string;
}

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}
```

## Customization Tips

### Add New Category
```typescript
const customData = {
  ...DEFAULT_FAQ_DATA,
  'New Category': [
    { id: 18, number: '01', question: '...', answer: '...' }
  ]
};

<FAQSection
  faqData={customData}
  categories={[...DEFAULT_CATEGORIES, 'New Category']}
/>
```

### Change Default Expanded
```typescript
// Modify in component
const [expandedItems, setExpandedItems] = useState<number[]>([2, 5]);
```

### Adjust Gradient Intensity
Modify opacity values in theme configuration.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

- React
- Framer Motion
- Heroicons (ChevronUpIcon)

## Demo

Visit `/faq-demo` to see all themes in action!

---

**Version**: 2.0.0
**Last Updated**: 2025-10-06
**Status**: ✅ Production Ready
