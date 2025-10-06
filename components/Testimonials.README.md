# Testimonials Component - Dynamic & Themeable

A fully dynamic, themeable testimonials carousel component with 4 color themes and exciting default content.

## Features

- 🎨 **4 Color Themes**: Scholarship, Lead, Seed (default), and UG
- 📝 **12 Diverse Default Testimonials**: Realistic, engaging content
- 🔄 **Carousel Navigation**: Smooth page transitions
- ⭐ **Starfield Background**: Animated background effects
- 🎭 **Theme-based Styling**: All accents change per theme
- 📱 **Fully Responsive**: Mobile and desktop optimized
- ✨ **Animated Effects**: Gradient blobs, floating particles

## Usage

### Basic Example (Default SEED Theme)
```tsx
import Testimonials from '@/components/Testimonials';

export default function Page() {
  return <Testimonials />;
}
```

### Scholarship Theme
```tsx
<Testimonials theme="scholarship" />
```

### LEAD Theme
```tsx
<Testimonials theme="lead" />
```

### UG Program Theme
```tsx
<Testimonials theme="ug" />
```

### Custom Title
```tsx
<Testimonials
  theme="scholarship"
  title="Student Success Stories"
/>
```

### Custom Testimonials
```tsx
const customTestimonials = [
  {
    id: 1,
    text: "Amazing experience! The program exceeded all expectations.",
    name: "John Doe",
    role: "Student",
    program: "Computer Science",
    image: "/path/to/image.jpg"
  },
  // ... more testimonials
];

<Testimonials
  theme="lead"
  testimonials={customTestimonials}
/>
```

### Custom Items Per Page
```tsx
<Testimonials
  theme="ug"
  itemsPerPage={4}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'scholarship' \| 'lead' \| 'seed' \| 'ug'` | `'seed'` | Color theme |
| `testimonials` | `Testimonial[]` | 12 defaults | Array of testimonial objects |
| `title` | `string` | `'What People Had To Say'` | Section heading |
| `itemsPerPage` | `number` | `3` | Testimonials per page |

## Testimonial Interface

```typescript
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  program?: string;
  image: string;
}
```

## Color Themes

### Scholarship Theme
- **Primary**: `#3232e6` (Deep Blue)
- **Secondary**: `#4242FF` (Bright Blue)
- **Use Case**: General scholarship programs

### LEAD Theme
- **Primary**: `#A8F326` (Lime Green)
- **Secondary**: `#8FD920` (Dark Lime)
- **Use Case**: LEAD program testimonials

### SEED Theme (Default)
- **Primary**: `#FF8829` (Orange)
- **Secondary**: `#E77620` (Dark Orange)
- **Use Case**: SEED/K12 programs

### UG Theme
- **Primary**: `#4242FF` (Bright Blue)
- **Secondary**: `#3232e6` (Deep Blue)
- **Use Case**: Undergraduate programs

## What Changes Per Theme?

### ✅ Theme-Dependent Elements
- Quote icon color
- Avatar border color
- Background gradient blobs
- Navigation chevron hover color
- Floating particle colors

### ❌ Consistent Elements
- Background (dark gradient)
- Starfield animation
- Card structure
- Text colors (white/gray)
- Layout and spacing

## Default Testimonials

The component includes 12 diverse, realistic testimonials:

1. **UG Student** - Priya Sharma (Computer Science)
2. **Parent** - Rajesh Kumar (K12 SEED Program)
3. **LEAD Student** - Arjun Menon (AI & ML Track)
4. **K12 Student** - Ananya Patel (Grade 11)
5. **UG Graduate** - Mohammed Ali (Data Science)
6. **Parent** - Lakshmi Iyer (K12 Program)
7. **UG Student** - Vikram Singh (Full-Stack Development)
8. **LEAD Graduate** - Sneha Reddy (Product Management)
9. **Career Switcher** - Karthik Raman (UG Program)
10. **UG Graduate** - Divya Krishnan (Software Engineering)
11. **Parent** - Amit Desai (K12 SEED)
12. **LEAD Student** - Rohan Gupta (Entrepreneurship Track)

## Examples

### Example 1: Scholarship Page
```tsx
<Testimonials
  theme="scholarship"
  title="Scholarship Recipients Share Their Stories"
/>
```

### Example 2: LEAD Program Page
```tsx
<Testimonials
  theme="lead"
  title="LEAD Program Success Stories"
/>
```

### Example 3: SEED Program Page
```tsx
<Testimonials
  theme="seed"
  title="SEED Program Parent & Student Feedback"
/>
```

### Example 4: UG Program Page
```tsx
<Testimonials
  theme="ug"
  title="Undergraduate Student Testimonials"
/>
```

### Example 5: Custom Content
```tsx
const mentorTestimonials = [
  {
    id: 1,
    text: "Teaching at Bower School has been incredibly rewarding...",
    name: "Dr. Sarah Williams",
    role: "Senior Mentor",
    program: "AI & ML",
    image: "/mentors/sarah.jpg"
  },
  // ... more
];

<Testimonials
  theme="scholarship"
  testimonials={mentorTestimonials}
  title="What Our Mentors Say"
  itemsPerPage={2}
/>
```

## Carousel Features

- **Smooth Transitions**: Framer Motion animations
- **Infinite Loop**: Automatically cycles back to start
- **Page Indicator**: Shows current/total pages
- **Navigation Buttons**: Previous and Next
- **Auto-numbered Pages**: 1 / 4 format

## Responsive Behavior

### Mobile (< 768px)
- Single column testimonial cards
- Compact navigation
- Smaller gradient blobs
- Adjusted padding

### Desktop (≥ 768px)
- 3-column grid (default)
- Large gradient effects
- Prominent navigation
- Full starfield animation

## Animation Effects

1. **Starfield Background**: 100 twinkling stars
2. **Gradient Blobs**: Theme-colored light effects
3. **Floating Particles**: 2 animated dots
4. **Card Entrance**: Staggered fade-in
5. **Carousel Transition**: Slide animation
6. **Hover Effects**: Card scale and background

## Performance

- Optimized animations with Framer Motion
- Lazy-loaded images with Next.js Image
- Efficient star rendering
- Smooth 60fps transitions

## Accessibility

- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels on buttons
- Semantic HTML structure

## TypeScript Support

Full TypeScript support with exported types:

```typescript
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  program?: string;
  image: string;
}

interface TestimonialsProps {
  theme?: ThemeType;
  testimonials?: Testimonial[];
  title?: string;
  itemsPerPage?: number;
}
```

## Customization Tips

### Change Items Per Page
```tsx
// Show 4 testimonials at once
<Testimonials itemsPerPage={4} />
```

### Add New Default Testimonials
Edit `DEFAULT_TESTIMONIALS` array in the component file.

### Adjust Animation Speed
Modify transition durations in the component.

### Change Starfield Density
Adjust the star count in the Array(100) generation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

- React
- Framer Motion
- Next.js (Image component)
- Heroicons (ChevronLeftIcon, ChevronRightIcon)

## Notes

- Images should be optimized for web
- Recommended image size: 56x56px (avatar)
- Supports JPG, PNG, WebP formats
- Uses Next.js Image component for optimization

## Demo

Visit `/testimonials-demo` to see all themes in action!

---

**Version**: 2.0.0
**Last Updated**: 2025-10-06
**Status**: ✅ Production Ready
