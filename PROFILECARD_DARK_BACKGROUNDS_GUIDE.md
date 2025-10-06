# ProfileCard - Complete Dark Background System

## Overview

Each theme now has a **complete dark background system** with three layers that create a unique atmospheric effect, matching the FAQSection implementation.

---

## 🎨 Background Layer System

### Layer 1: Base Dark Color (Theme-Specific)
The foundation dark color that sets the overall mood.

### Layer 2: Radial Gradient (Theme-Colored)
An elliptical glow emanating from the bottom center.

### Layer 3: Overlay Gradient (Theme-Tinted)
A vertical gradient that fades from transparent to the dark base color.

---

## 🌈 Complete Theme Breakdown

### **Scholarship Theme** (Blue)

```css
/* Layer 1: Base */
background-color: #010817; /* Dark blue-black */

/* Layer 2: Radial Gradient */
background-image: radial-gradient(
  ellipse at center bottom,
  rgba(50, 50, 230, 0.1) 0%,     /* Deep blue glow */
  rgba(66, 66, 255, 0.05) 51%,   /* Bright blue fade */
  transparent 100%
);

/* Layer 3: Overlay */
background-image: linear-gradient(
  to bottom,
  transparent 0%,                 /* Clear at top */
  rgba(1, 8, 23, 0.5) 50%,       /* Blue-tinted mid */
  #010817 100%                    /* Solid dark blue at bottom */
);
```

**Visual Effect:**
- Dark blue-black foundation
- Blue ethereal glow from bottom
- Smooth fade to darkness
- Professional, scholarly atmosphere

---

### **LEAD Theme** (Lime Green)

```css
/* Layer 1: Base */
background-color: #0a1501; /* Dark green-black */

/* Layer 2: Radial Gradient */
background-image: radial-gradient(
  ellipse at center bottom,
  rgba(168, 243, 38, 0.1) 0%,    /* Lime green glow */
  rgba(143, 217, 32, 0.05) 51%,  /* Dark lime fade */
  transparent 100%
);

/* Layer 3: Overlay */
background-image: linear-gradient(
  to bottom,
  transparent 0%,                 /* Clear at top */
  rgba(10, 21, 1, 0.5) 50%,      /* Green-tinted mid */
  #0a1501 100%                    /* Solid dark green at bottom */
);
```

**Visual Effect:**
- Dark green-black foundation
- Lime green energy glow from bottom
- Natural fade to darkness
- Energetic, growth-oriented atmosphere

---

### **SEED Theme** (Orange) - Default

```css
/* Layer 1: Base */
background-color: #170c01; /* Dark orange-brown */

/* Layer 2: Radial Gradient */
background-image: radial-gradient(
  ellipse at center bottom,
  rgba(255, 136, 41, 0.1) 0%,    /* Orange glow */
  rgba(255, 191, 41, 0.05) 51%,  /* Golden orange fade */
  transparent 100%
);

/* Layer 3: Overlay */
background-image: linear-gradient(
  to bottom,
  transparent 0%,                 /* Clear at top */
  rgba(23, 12, 1, 0.5) 50%,      /* Orange-tinted mid */
  #170c01 100%                    /* Solid dark brown at bottom */
);
```

**Visual Effect:**
- Dark orange-brown foundation
- Warm orange glow from bottom
- Rich fade to darkness
- Warm, welcoming atmosphere

---

### **UG Theme** (Bright Blue)

```css
/* Layer 1: Base */
background-color: #010817; /* Dark blue-black */

/* Layer 2: Radial Gradient */
background-image: radial-gradient(
  ellipse at center bottom,
  rgba(66, 66, 255, 0.1) 0%,     /* Bright blue glow */
  rgba(50, 50, 230, 0.05) 51%,   /* Deep blue fade */
  transparent 100%
);

/* Layer 3: Overlay */
background-image: linear-gradient(
  to bottom,
  transparent 0%,                 /* Clear at top */
  rgba(1, 8, 23, 0.5) 50%,       /* Blue-tinted mid */
  #010817 100%                    /* Solid dark blue at bottom */
);
```

**Visual Effect:**
- Dark blue-black foundation
- Bright blue modern glow from bottom
- Technical fade to darkness
- Modern, tech-forward atmosphere

---

## 📊 Visual Comparison

```
┌──────────────────────────────────────────────────────────────┐
│  SCHOLARSHIP      │  LEAD         │  SEED         │  UG       │
├──────────────────────────────────────────────────────────────┤
│  #010817         │  #0a1501      │  #170c01      │  #010817  │
│  Blue-Black      │  Green-Black  │  Orange-Brown │  Blue-Black│
├──────────────────────────────────────────────────────────────┤
│  Blue Glow       │  Lime Glow    │  Orange Glow  │  Blue Glow│
│  Professional    │  Energetic    │  Warm         │  Technical│
│  Scholarly       │  Growth       │  Welcoming    │  Modern   │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎯 How It Works

### Complete Stacking Order (Bottom to Top)

```
┌─────────────────────────────────────────────┐
│                                             │
│  8. Light Effects (decorative SVGs)        │
│                                             │
│  7. Profile Card (dark gray #161616)       │
│     ↑ Contains all content                 │
│                                             │
│  6. Corner Borders (theme-colored)         │
│     ↑ Gradient borders on card             │
│                                             │
│  5. Overlay Gradient (theme-tinted fade)   │
│     ↑ Fades from transparent to dark       │
│                                             │
│  4. Radial Gradient (theme-colored glow)   │
│     ↑ Ellipse from bottom center           │
│                                             │
│  3. Base Dark Color (theme-specific)       │
│     Solid color foundation                 │
│                                             │
│  2. Outer Container                        │
│                                             │
│  1. Page Background                        │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🌟 Dark Base Color Palette

### Color Theory Behind Each Base

| Theme | Base Color | RGB | Mood |
|-------|-----------|-----|------|
| **Scholarship** | `#010817` | (1, 8, 23) | Professional blue-black, trustworthy |
| **LEAD** | `#0a1501` | (10, 21, 1) | Natural green-black, growth-oriented |
| **SEED** | `#170c01` | (23, 12, 1) | Warm brown-black, nurturing |
| **UG** | `#010817` | (1, 8, 23) | Tech blue-black, modern |

---

## 💡 Usage in Code

### Theme Configuration Structure

```typescript
interface ProfileTheme {
  primary: string;           // Accent color
  secondary: string;         // Secondary accent
  bgAccent: string;         // Badge background
  borderColor: string;       // Borders
  hoverBg: string;          // Badge hover
  darkBg: string;           // 🆕 Base dark color
  radialGradient: string;   // 🆕 Bottom glow
  overlayGradient: string;  // 🆕 Tinted overlay
}
```

### Implementation

```tsx
<div
  style={{
    backgroundColor: currentTheme.darkBg,
    backgroundImage: currentTheme.radialGradient
  }}
>
  <div style={{ backgroundImage: currentTheme.overlayGradient }} />
  {/* Profile Card Content */}
</div>
```

---

## 🎨 Visual Examples

### Scholarship Theme (Blue)
```
Background Visualization:

Top:    ░░░░░░░░░░░░░░░░░░ (Transparent overlay)
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ (50% blue-tinted)
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (Solid dark blue)
Center: ╔══════════════════╗
        ║  Profile Card    ║ (Dark gray card)
        ║  Content Here    ║
        ║  Blue Radial     ║ (Elliptical glow)
        ║  Glow Effect     ║
Bottom: ╚══════════════════╝
        ████████████████████ (#010817 dark blue-black)
```

### LEAD Theme (Lime)
```
Background Visualization:

Top:    ░░░░░░░░░░░░░░░░░░ (Transparent overlay)
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ (50% green-tinted)
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (Solid dark green)
Center: ╔══════════════════╗
        ║  Profile Card    ║ (Dark gray card)
        ║  Content Here    ║
        ║  Lime Radial     ║ (Elliptical glow)
        ║  Glow Effect     ║
Bottom: ╚══════════════════╝
        ████████████████████ (#0a1501 dark green-black)
```

### SEED Theme (Orange)
```
Background Visualization:

Top:    ░░░░░░░░░░░░░░░░░░ (Transparent overlay)
        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ (50% orange-tinted)
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ (Solid dark orange)
Center: ╔══════════════════╗
        ║  Profile Card    ║ (Dark gray card)
        ║  Content Here    ║
        ║  Orange Radial   ║ (Elliptical glow)
        ║  Glow Effect     ║
Bottom: ╚══════════════════╝
        ████████████████████ (#170c01 dark orange-brown)
```

---

## ⚡ Performance Notes

- All gradients are CSS-based (no images)
- GPU-accelerated rendering
- Smooth 60fps performance
- Minimal impact on page load
- No additional HTTP requests
- Radial gradient positioned at bottom center
- Overlay gradient uses pointer-events-none for performance

---

## 🔧 Customization

### Adjust Glow Intensity
Modify opacity values in `radialGradient`:
```typescript
rgba(50, 50, 230, 0.1)  // 10% opacity → Change to 0.15 for brighter
```

### Change Overlay Strength
Modify opacity in `overlayGradient`:
```typescript
rgba(1, 8, 23, 0.5)  // 50% opacity → Change to 0.3 for lighter
```

### Create New Theme
Add to `PROFILE_THEMES` with matching dark base color:

```typescript
customTheme: {
  primary: '#FF00FF',        // Magenta
  secondary: '#CC00CC',      // Dark magenta
  bgAccent: 'rgba(255, 0, 255, 0.1)',
  borderColor: '#FF00FF',
  hoverBg: 'rgba(255, 0, 255, 0.2)',
  darkBg: '#1a0115',        // Dark magenta-black
  radialGradient: 'radial-gradient(ellipse at center bottom, rgba(255, 0, 255, 0.1) 0%, rgba(204, 0, 204, 0.05) 51%, transparent 100%)',
  overlayGradient: 'linear-gradient(to bottom, transparent 0%, rgba(26, 1, 21, 0.5) 50%, #1a0115 100%)',
}
```

---

## 📖 Differences from FAQSection

While the background system is identical, ProfileCard has unique elements:

### ProfileCard Specific Features
- Corner gradient borders (top-left)
- Skill badges with theme colors
- Profile card overlay (#161616)
- Decorative light SVG effects

### Shared with FAQSection
- 3-layer background system
- Theme-specific dark colors
- Radial gradient from bottom
- Overlay gradient fade
- Same 4 color themes

---

## 🎯 Complete Theme Properties

Each theme includes:

```typescript
{
  primary: string;           // Header, borders
  secondary: string;         // Secondary accents
  bgAccent: string;         // Badge background (10% opacity)
  borderColor: string;       // Corner borders, badge borders
  hoverBg: string;          // Badge hover (20% opacity)
  darkBg: string;           // Base dark background color
  radialGradient: string;   // Bottom-center elliptical glow
  overlayGradient: string;  // Top-to-bottom fade overlay
}
```

---

**Last Updated**: 2025-10-06
**Feature**: Complete dark background theming system
**Themes**: 4 unique dark atmospheres
**Layers**: 3-layer gradient system per theme
**Consistency**: Matches FAQSection implementation
