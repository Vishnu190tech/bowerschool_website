# ProfileCard Component - Dynamic & Themeable

A fully dynamic, themeable profile card component showcasing student achievements with 4 color themes.

## Features

- 🎨 **4 Color Themes**: Scholarship, Lead, Seed (default), and UG
- 🌈 **Theme-Based Styling**: Header, borders, and skill badges adapt to theme
- 📝 **Dynamic Profile Data**: Fully customizable student information
- 💫 **Animated Elements**: Smooth Framer Motion animations
- 📱 **Fully Responsive**: Mobile and desktop optimized
- ✨ **Gradient Borders**: Theme-colored corner accents with fade effects

## Usage

### Basic Example (Default SEED Theme)
```tsx
import ProfileCard from '@/components/ProfileCard';

export default function Page() {
  return <ProfileCard />;
}
```

### Scholarship Theme
```tsx
<ProfileCard theme="scholarship" />
```

### LEAD Theme
```tsx
<ProfileCard theme="lead" />
```

### UG Program Theme
```tsx
<ProfileCard theme="ug" />
```

### Custom Profile Data
```tsx
const customProfile = {
  name: 'Sarah Johnson',
  title: 'Young Innovator',
  school: 'Bower School of Entrepreneurship',
  education: 'Grade 5',
  profileImage: '/path-to-image.png',
  instagramUrl: 'https://instagram.com/sarah',
  mediumUrl: 'https://medium.com/@sarah',
  hardSkills: [
    { name: 'Web Development', icon: null },
    { name: 'Python', icon: null },
    { name: 'Figma Advanced', icon: '/figma-icon.svg' },
  ],
  softSkills: ['Leadership', 'Communication', 'Creativity'],
  projects: [
    'E-commerce Platform',
    'Mobile Game Prototype',
    'Community Website',
  ],
};

<ProfileCard
  theme="ug"
  profileData={customProfile}
  headerTitle="Future Tech Leader"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'scholarship' \| 'lead' \| 'seed' \| 'ug'` | `'seed'` | Color theme |
| `profileData` | `ProfileData` | Default data | Student profile information |
| `headerTitle` | `string` | `"You After Bower's Camp"` | Card header text |

## Interfaces

```typescript
interface HardSkill {
  name: string;
  icon: string | null;  // Path to icon SVG, or null
}

interface ProfileData {
  name: string;
  title: string;
  school: string;
  education: string;
  profileImage: string;
  instagramUrl?: string;
  mediumUrl?: string;
  hardSkills: HardSkill[];
  softSkills: string[];
  projects: string[];
}

interface ProfileCardProps {
  theme?: 'scholarship' | 'lead' | 'seed' | 'ug';
  profileData?: ProfileData;
  headerTitle?: string;
}
```

## Color Themes

### Scholarship Theme (Blue)
- **Primary**: `#3232e6` (Deep Blue)
- **Secondary**: `#4242FF` (Bright Blue)
- **Background Accent**: `rgba(50, 50, 230, 0.1)`
- **Border**: `#3232e6`
- **Hover**: `rgba(50, 50, 230, 0.2)`
- **Dark Background**: `#010817` (Dark blue-black)
- **Radial Gradient**: Blue ellipse from bottom
- **Overlay Gradient**: Blue-tinted dark fade

### LEAD Theme (Lime Green)
- **Primary**: `#A8F326` (Lime Green)
- **Secondary**: `#8FD920` (Dark Lime)
- **Background Accent**: `rgba(168, 243, 38, 0.1)`
- **Border**: `#A8F326`
- **Hover**: `rgba(168, 243, 38, 0.2)`
- **Dark Background**: `#0a1501` (Dark green-black)
- **Radial Gradient**: Lime green ellipse from bottom
- **Overlay Gradient**: Green-tinted dark fade

### SEED Theme (Orange) - DEFAULT
- **Primary**: `#FF8829` (Orange)
- **Secondary**: `#FFBF29` (Golden Orange)
- **Background Accent**: `rgba(255, 136, 41, 0.1)`
- **Border**: `#ff8829`
- **Hover**: `rgba(255, 136, 41, 0.2)`
- **Dark Background**: `#170c01` (Dark orange-brown)
- **Radial Gradient**: Orange ellipse from bottom
- **Overlay Gradient**: Orange-tinted dark fade

### UG Theme (Bright Blue)
- **Primary**: `#4242FF` (Bright Blue)
- **Secondary**: `#3232e6` (Deep Blue)
- **Background Accent**: `rgba(66, 66, 255, 0.1)`
- **Border**: `#4242FF`
- **Hover**: `rgba(66, 66, 255, 0.2)`
- **Dark Background**: `#010817` (Dark blue-black)
- **Radial Gradient**: Bright blue ellipse from bottom
- **Overlay Gradient**: Blue-tinted dark fade

## What Changes Per Theme?

### ✅ Theme-Dependent Elements
1. **Outer background color** - Theme-specific dark color (darkBg)
2. **Radial gradient** - Theme-colored ellipse from bottom center
3. **Overlay gradient** - Theme-tinted vertical fade
4. **Header title color** - Primary theme color
5. **Top-left corner borders** - Gradient fade with theme colors
6. **Hard skills badges** - Background, border, and hover state
7. **Soft skills badges** - Background, border, and hover state

### ❌ Consistent Elements
- Profile card color (`#161616` dark gray)
- Text colors (white, `#6a6a6a` gray)
- Card shadow and structure
- Layout and spacing
- Animation timings
- Social icons
- Decorative light effects

## Default Profile Data

```typescript
{
  name: 'Aadithya Iyer',
  title: 'Young Entrepreneur',
  school: 'Bower School of Entrepreneurship',
  education: 'Grade 3',
  profileImage: '/6794569b1ec7c714d7c310e2b90d160269fb175f.png',
  instagramUrl: '#',
  mediumUrl: '#',
  hardSkills: [
    { name: 'Creative Skills', icon: null },
    { name: 'Basic Coding Skills', icon: null },
    { name: 'Design Thinking', icon: null },
    { name: 'Figma Basic', icon: '/bf0453164e9cbbb5509970b8bccbea81e82c81d0.svg' },
    { name: 'Spreadsheet Fluency', icon: '/7d851c851c3705f164ee4d16d542786caf7e79b7.svg' },
    { name: 'Design Tools', icon: null },
    { name: '<> HTML', icon: null },
  ],
  softSkills: [
    'Teamwork',
    'Problem Solving',
    'Time Management',
    'Project Management',
    'Collaboration',
    'Public Speaking',
  ],
  projects: [
    'Build your own food truck simulation',
    '"Fix the Planet" Group pitch',
    'My first Pet Tacker App',
    '1- Min Logo Maker',
  ],
}
```

## Dark Background System

Each theme features a unique 3-layer background system:

### Layer 1: Base Dark Color
Theme-specific dark background that sets the overall mood:
- **Scholarship/UG**: `#010817` (Dark blue-black)
- **LEAD**: `#0a1501` (Dark green-black)
- **SEED**: `#170c01` (Dark orange-brown)

### Layer 2: Radial Gradient
Elliptical glow emanating from the bottom center, unique to each theme:

**Scholarship:**
```css
radial-gradient(ellipse at center bottom,
  rgba(50, 50, 230, 0.1) 0%,
  rgba(66, 66, 255, 0.05) 51%,
  transparent 100%)
```

**LEAD:**
```css
radial-gradient(ellipse at center bottom,
  rgba(168, 243, 38, 0.1) 0%,
  rgba(143, 217, 32, 0.05) 51%,
  transparent 100%)
```

**SEED:**
```css
radial-gradient(ellipse at center bottom,
  rgba(255, 136, 41, 0.1) 0%,
  rgba(255, 191, 41, 0.05) 51%,
  transparent 100%)
```

**UG:**
```css
radial-gradient(ellipse at center bottom,
  rgba(66, 66, 255, 0.1) 0%,
  rgba(50, 50, 230, 0.05) 51%,
  transparent 100%)
```

### Layer 3: Overlay Gradient
Vertical gradient that fades from transparent to the dark base color, creating depth:
- Starts transparent at top
- 50% opacity theme-tinted color at midpoint
- Solid dark base color at bottom

For complete details, see: `/PROFILECARD_DARK_BACKGROUNDS_GUIDE.md`

---

## Visual Elements

### Corner Border System
The top-left corner features two gradient borders:

**Vertical Border:**
- Full height on left edge
- Gradient: Theme primary → 50% opacity → transparent
- Rounded ends for smooth appearance

**Horizontal Border:**
- Extends right from top-left corner
- Width: 150px (mobile) → 200px (tablet) → 250px (desktop)
- Gradient: Theme primary → 60% opacity → transparent
- Rounded ends for smooth appearance

### Skill Badges
Both hard and soft skills use themed badges with:
- Background: 10% opacity theme color
- Border: Solid theme color
- Hover: 20% opacity theme color background + scale 1.05
- Smooth color transitions
- Icons (optional) for hard skills

### Profile Section
- Circular profile image (responsive sizing)
- Name and title
- Social media links (Instagram, Medium)
- Hover animations on social icons

### Details Grid
- **Left Column**: School and Education info
- **Right Column**: Projects list with animated bullets

## Examples

### Example 1: Scholarship Student Profile
```tsx
<ProfileCard
  theme="scholarship"
  headerTitle="Scholarship Achievement Profile"
/>
```

### Example 2: LEAD Program Graduate
```tsx
<ProfileCard
  theme="lead"
  headerTitle="LEAD Program Success Story"
/>
```

### Example 3: SEED/K12 Student
```tsx
<ProfileCard
  theme="seed"
  headerTitle="SEED Program Graduate"
/>
```

### Example 4: UG Program Student
```tsx
<ProfileCard
  theme="ug"
  headerTitle="Undergraduate Program Achievement"
/>
```

## Animations

### Card Animation
- Initial: Opacity 0, translate Y +20px
- Animate: Fade in and slide up
- Duration: 0.6s with staggered children

### Item Animations
- Initial: Opacity 0, scale 0.8
- Animate: Fade in and scale to 1
- Duration: 0.4s

### Skill Badges
- Initial: Opacity 0, scale 0
- Animate: Pop in effect
- Staggered delays: Hard skills start at 0.5s, soft skills at 0.7s
- Hover: Scale 1.05 with background color change

### Project Items
- Staggered entrance from left
- Delay increases with index
- Smooth opacity and X translation

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Centered profile section
- Smaller text sizes (24px header)
- Compact spacing
- Horizontal border: 150px width
- Profile image: 80px

### Tablet (768px - 1024px)
- Two-column grid for details
- Left-aligned profile text
- Medium text sizes (3xl header)
- Standard spacing
- Horizontal border: 200px width
- Profile image: 100px

### Desktop (≥ 1024px)
- Full grid layout
- Large text sizes (44px header)
- Spacious padding
- Full gradient effects
- Horizontal border: 250px width
- Profile image: 123px

## Background Effects

### Light Effects (Desktop Only)
Two decorative light SVG overlays:
- Top-right position
- Bottom-left position
- Mix blend mode: hard-light
- Hidden on mobile for performance

## Interactive Features

### Hover Effects
- Skill badges: Color change + scale up
- Social icons: Scale up animation
- Smooth transitions on all interactive elements

### Social Links
- Instagram icon with hover animation
- Medium icon with hover animation
- Tap animation (scale down) for mobile

## Performance

- Optimized animations with Framer Motion
- GPU-accelerated transforms
- Responsive images with Next.js Image
- Conditional rendering of decorative elements
- Smooth 60fps performance

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus indicators
- ARIA labels for links

## TypeScript Support

Full TypeScript support with exported types:

```typescript
type ThemeType = 'scholarship' | 'lead' | 'seed' | 'ug';

interface ProfileTheme {
  primary: string;           // Main accent color
  secondary: string;         // Secondary accent
  bgAccent: string;         // Badge background
  borderColor: string;       // Border colors
  hoverBg: string;          // Badge hover state
  darkBg: string;           // Theme-specific dark background
  radialGradient: string;   // Bottom-center glow effect
  overlayGradient: string;  // Top-to-bottom fade overlay
}

interface HardSkill {
  name: string;
  icon: string | null;
}

interface ProfileData {
  name: string;
  title: string;
  school: string;
  education: string;
  profileImage: string;
  instagramUrl?: string;
  mediumUrl?: string;
  hardSkills: HardSkill[];
  softSkills: string[];
  projects: string[];
}
```

## Customization Tips

### Change Header Title
```tsx
<ProfileCard headerTitle="Your Custom Title" />
```

### Add New Skills
```tsx
const customData = {
  ...DEFAULT_PROFILE_DATA,
  hardSkills: [
    ...DEFAULT_PROFILE_DATA.hardSkills,
    { name: 'New Skill', icon: '/new-icon.svg' }
  ]
};

<ProfileCard profileData={customData} />
```

### Modify Theme Colors
Edit the `PROFILE_THEMES` object in the component:
```typescript
const PROFILE_THEMES: Record<ThemeType, ProfileTheme> = {
  scholarship: {
    primary: '#3232e6',
    // ... other colors
  },
  // ... other themes
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

- React
- Next.js
- Framer Motion
- TypeScript

## Demo

Visit `/profile-demo` to see all themes in action with an interactive theme switcher!

---

**Version**: 1.0.0
**Last Updated**: 2025-10-06
**Status**: ✅ Production Ready
