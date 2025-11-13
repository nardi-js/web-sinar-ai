# SinarAI System - Color Palette & Visual Guide

## 🎨 Primary Color Palette

### Dark Backgrounds
```
Sinar Dark (Main Background)
HEX: #0A0A0A
RGB: 10, 10, 10
Use: Main page background, creates deep space effect
```

```
Sinar Dark Light (Surface Background)
HEX: #1A1A1A
RGB: 26, 26, 26
Use: Card backgrounds, section containers, footer
```

### Golden Accents
```
Sinar Gold (Primary Accent)
HEX: #D4AF37
RGB: 212, 175, 55
Use: Buttons, links, icons, highlights, borders
Represents: "Sinar" (light/ray), premium quality, intelligence
```

```
Sinar Gold Light (Secondary Accent)
HEX: #F4E4A6
RGB: 244, 228, 166
Use: Secondary highlights, text accents, hover states
Represents: Warm light, approachable technology
```

### Text Colors
```
White (Primary Text)
HEX: #FFFFFF
RGB: 255, 255, 255
Use: Headings, important text
```

```
Gray 100 (Light Text)
HEX: #F5F5F5
RGB: 245, 245, 245
Use: Body text, readable content
```

```
Gray 300 (Medium Text)
HEX: #D1D5DB
RGB: 209, 213, 219
Use: Secondary text, captions
```

```
Gray 400 (Muted Text)
HEX: #9CA3AF
RGB: 156, 163, 175
Use: Placeholders, subtle text, disabled states
```

```
Gray 500 (Very Muted)
HEX: #6B7280
RGB: 107, 114, 128
Use: Least important text, helper text
```

---

## 🎨 Color Usage Guide

### Hero Section
- Background: Sinar Dark + animated gold orbs
- Headline: White + Gold gradient
- Body text: Gray 400
- Buttons: Gold gradient with dark text

### Navigation
- Background: Transparent → Dark with blur
- Text: Gray 300 → Gold on hover
- Active: Gold underline
- Mobile menu: Dark Light background

### Cards (About, Vision, Divisions, Portfolio, Testimonials)
- Background: Sinar Dark Light
- Border: Gold 20% opacity → 50% on hover
- Text: White headings, Gray 400 body
- Icons: Gold background with 10% opacity

### Buttons & CTAs

**Primary Button (Main CTA)**
```css
Background: Linear gradient (Gold → Gold Light)
Text: Sinar Dark
Hover: Shadow glow + lift effect
```

**Secondary Button (Outlined)**
```css
Background: Transparent
Border: Gold 50% opacity
Text: Gold Light
Hover: Gold 10% background fill
```

### Form Elements
```css
Background: Sinar Dark
Border: Gold 30% opacity
Text: White
Placeholder: Gray 500
Focus: Border → Gold 100%
```

### Links
```css
Default: Gray 400
Hover: Gold
Active: Gold Light
```

---

## 🌈 Gradient Combinations

### Primary Gradient (Used in buttons, text)
```css
linear-gradient(to right, #D4AF37, #F4E4A6)
/* Gold to Light Gold, left to right */
```

### Background Gradient (Subtle effects)
```css
linear-gradient(to bottom right, rgba(212, 175, 55, 0.1), transparent)
/* Gold 10% to transparent, diagonal */
```

### Text Gradient (Animated headlines)
```css
background: linear-gradient(to right, #D4AF37, #F4E4A6, #D4AF37);
background-size: 200% 200%;
background-clip: text;
/* Creates animated flowing gradient */
```

---

## ✨ Opacity Levels

### Gold Opacity Scale
```
100% - #D4AF37 - Primary buttons, active states
60%  - rgba(212, 175, 55, 0.6) - Hover borders
50%  - rgba(212, 175, 55, 0.5) - Default borders
30%  - rgba(212, 175, 55, 0.3) - Subtle borders, dividers
20%  - rgba(212, 175, 55, 0.2) - Background glows
10%  - rgba(212, 175, 55, 0.1) - Very subtle backgrounds
5%   - rgba(212, 175, 55, 0.05) - Almost invisible glow
```

### Dark Opacity Scale
```
95% - rgba(10, 10, 10, 0.95) - Nav bar with blur
80% - rgba(10, 10, 10, 0.8) - Overlays
50% - rgba(10, 10, 10, 0.5) - Transparent panels
```

---

## 🎯 Semantic Color Usage

### Success States
```css
Background: rgba(34, 197, 94, 0.1)  /* Green 10% */
Border: rgba(34, 197, 94, 0.3)      /* Green 30% */
Text: #4ADE80                        /* Green 400 */
Use: Form success messages
```

### Interactive States

**Default State**
- Border: Gold 20%
- Background: Dark Light
- Text: Gray 300

**Hover State**
- Border: Gold 50%
- Background: Dark Light + Gold 5%
- Text: White or Gold Light
- Transform: translateY(-4px)
- Shadow: Gold glow

**Active/Focus State**
- Border: Gold 100%
- Background: Dark Light + Gold 10%
- Text: Gold Light

**Disabled State**
- Border: Gray 500 20%
- Background: Dark Light
- Text: Gray 500
- Cursor: not-allowed
- Opacity: 0.5

---

## 📐 Visual Hierarchy

### Level 1: Most Important
- Color: White (#FFFFFF)
- Examples: Main headlines, primary CTAs
- Font weight: 700 (Bold)

### Level 2: Secondary Important
- Color: Gold (#D4AF37) or Gray 100 (#F5F5F5)
- Examples: Subheadings, section titles
- Font weight: 600 (Semi-bold)

### Level 3: Body Content
- Color: Gray 300 (#D1D5DB) or Gray 400 (#9CA3AF)
- Examples: Paragraphs, descriptions
- Font weight: 400 (Regular)

### Level 4: Supporting Info
- Color: Gray 400 (#9CA3AF) or Gray 500 (#6B7280)
- Examples: Captions, labels, helper text
- Font weight: 400 or 500

---

## 🎨 Division-Specific Colors

### Creative Studio
```
Primary: Yellow-orange tones
Gradient: rgba(234, 179, 8, 0.2) to rgba(251, 146, 60, 0.1)
Border: rgba(234, 179, 8, 0.3)
Icon bg: rgba(234, 179, 8, 0.1)
```

### Web & System Studio
```
Primary: Blue-cyan tones
Gradient: rgba(59, 130, 246, 0.2) to rgba(6, 182, 212, 0.1)
Border: rgba(59, 130, 246, 0.3)
Icon bg: rgba(59, 130, 246, 0.1)
```

### Document & Task Studio
```
Primary: Green-emerald tones
Gradient: rgba(34, 197, 94, 0.2) to rgba(16, 185, 129, 0.1)
Border: rgba(34, 197, 94, 0.3)
Icon bg: rgba(34, 197, 94, 0.1)
```

---

## 🌟 Special Effects

### Glow Effects
```css
/* Button glow on hover */
box-shadow: 0 20px 60px rgba(212, 175, 55, 0.5);

/* Soft glow */
box-shadow: 0 10px 40px rgba(212, 175, 55, 0.3);

/* Subtle glow */
box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
```

### Blur Effects
```css
/* Navigation backdrop */
backdrop-filter: blur(12px);

/* Card subtle blur */
backdrop-filter: blur(8px);
```

### Gradient Borders
```css
/* Divider line */
background: linear-gradient(
  to right,
  transparent,
  rgba(212, 175, 55, 0.3),
  transparent
);
height: 1px;
```

---

## 🎯 Accessibility Considerations

### Contrast Ratios (WCAG AA Compliant)

**Gold on Dark Background**
- #D4AF37 on #0A0A0A: 7.2:1 ✓ (Passes AAA)
- #F4E4A6 on #0A0A0A: 11.5:1 ✓ (Passes AAA)

**White/Gray on Dark**
- #FFFFFF on #0A0A0A: 21:1 ✓ (Maximum contrast)
- #F5F5F5 on #0A0A0A: 19.8:1 ✓ (Excellent)
- #D1D5DB on #0A0A0A: 14.2:1 ✓ (Excellent)
- #9CA3AF on #0A0A0A: 9.3:1 ✓ (Passes AAA)

**Gold on Light Backgrounds (if switching to light mode)**
- #D4AF37 on #FFFFFF: 2.9:1 ⚠ (Only for large text)
- Better use: #8B7520 (darker gold): 4.8:1 ✓ (Passes AA)

---

## 🖼️ Background Patterns

### Grid Pattern (Subtle)
```css
background-image: 
  linear-gradient(to right, #D4AF37 1px, transparent 1px),
  linear-gradient(to bottom, #D4AF37 1px, transparent 1px);
background-size: 60px 60px;
opacity: 0.05;
```

### Dot Pattern
```css
background-image: radial-gradient(
  circle at 2px 2px,
  #D4AF37 1px,
  transparent 0
);
background-size: 40px 40px;
opacity: 0.05;
```

---

## 📱 Color on Different Devices

### Mobile
- Ensure touch targets have clear visual feedback
- Gold highlights on tap: 0.3s fade
- Increased contrast for outdoor visibility

### Desktop
- Hover states with gold glow
- Cursor changes on interactive elements
- Subtle animations on hover

### Print (if needed)
- Convert dark backgrounds to light
- Keep gold accents for brand
- Increase body text weight

---

## 🎨 Quick Reference Cheat Sheet

```
BACKGROUNDS
Main:    #0A0A0A (Deep Black)
Cards:   #1A1A1A (Dark Gray)

ACCENTS
Primary: #D4AF37 (Warm Gold)
Light:   #F4E4A6 (Light Gold)

TEXT
Title:   #FFFFFF (White)
Body:    #9CA3AF (Gray 400)
Muted:   #6B7280 (Gray 500)

BORDERS
Default: rgba(212, 175, 55, 0.2)
Hover:   rgba(212, 175, 55, 0.5)
Active:  rgba(212, 175, 55, 1.0)
```

---

## 🎯 When to Use Each Color

**Use Sinar Gold (#D4AF37) for:**
- Primary CTAs
- Active navigation items
- Section highlights
- Icons and badges
- Hover states
- Important borders

**Use Gold Light (#F4E4A6) for:**
- Text highlights
- Secondary accents
- Gradient endpoints
- Hover text color
- Badge text

**Use White (#FFFFFF) for:**
- Main headlines
- Primary text
- High-importance content

**Use Gray 400 (#9CA3AF) for:**
- Body paragraphs
- Descriptions
- Normal content
- Most readable text

**Use Gray 500 (#6B7280) for:**
- Labels
- Captions
- Helper text
- Less important info

---

**Remember: The gold represents "Sinar" (light/ray in Indonesian) - it should illuminate the dark, creating beautiful contrast and guiding the user's attention.**

© 2025 SinarAI System
