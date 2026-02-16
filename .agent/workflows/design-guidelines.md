---
description: Design guidelines and styling rules for consistent UI across the Code Samo project, based on the /models page aesthetic.
---

# 🎨 Design Guidelines - Code Samo

> Reference: This design system is based on the `/models` page and should be followed for all new pages and components to maintain visual consistency.

---

## 📋 Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Animations & Micro-interactions](#animations--micro-interactions)
6. [Backgrounds & Effects](#backgrounds--effects)
7. [Cards](#cards)
8. [Buttons](#buttons)
9. [Code Examples](#code-examples)

---

## 🎨 Color Palette

### Primary Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| **Background Dark** | `#0f1012` | `bg-[#0f1012]` | Main page background |
| **Card Background** | `#1a1b1e` | `bg-[#1a1b1e]` | Card/container backgrounds |
| **3D Scene Background** | `#111111` | - | Three.js scene background |

### Accent Colors

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| **Primary Red** | `#dc2626` | `text-red-600` | Headlines, emphasis |
| **Accent Red** | `#ef4444` | `text-red-500` | Labels, badges, highlights |
| **Hover Red** | `#f87171` | `text-red-400` | Hover states for text |
| **Red Glow** | `rgba(220,38,38,0.2)` | `bg-red-600/20` | Blur effects, glows |

### Neutral Colors

| Name | Tailwind Class | Usage |
|------|----------------|-------|
| **White** | `text-white` | Primary text |
| **Gray 400** | `text-gray-400` | Body text, descriptions |
| **Gray 500** | `text-gray-500` | Muted text, metadata |
| **Gray 800** | `border-gray-800` | Borders, dividers |
| **Gray 900** | `from-gray-900` | Gradients |

### Opacity Values

- **Subtle Backgrounds**: `bg-white/5`, `bg-white/10`
- **Overlays**: `bg-black/60`
- **Subtle Accents**: `bg-red-500/10`, `bg-red-400/10`

---

## 🔤 Typography

### Font Weights

```
extrabold (800) - Main headlines
bold (700) - Section titles, card titles
semibold (600) - Button text, labels
medium (500) - Regular emphasis
normal (400) - Body text
```

### Text Sizes

| Purpose | Class | Example |
|---------|-------|---------|
| **Hero Title** | `text-5xl md:text-7xl` | Page main headline |
| **Section Title** | `text-xl` | Card titles |
| **Body Text** | `text-lg` | Descriptions |
| **Small Text** | `text-sm` | Secondary info |
| **Micro Text** | `text-xs`, `text-[10px]` | Labels, metadata |

### Text Styling Patterns

```jsx
// Hero headline with gradient
className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"

// Section label
className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm"

// Card badge
className="text-red-500 text-[10px] uppercase font-bold tracking-widest bg-red-500/10 px-2 py-0.5 rounded"

// Description text
className="text-gray-400 text-lg leading-relaxed"
```

---

## 📐 Spacing & Layout

### Container

- **Max Width**: `max-w-7xl`
- **Horizontal Padding**: `px-6`
- **Section Centering**: `mx-auto`

### Section Spacing

| Section | Padding |
|---------|---------|
| **Header** | `pt-32 pb-20` |
| **Content Sections** | `py-20` |
| **Card Padding** | `p-6` (content area), `p-2` (viewer area) |

### Grid System

```jsx
// Responsive 3-column grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

### Standard Gaps

- **Grid gaps**: `gap-8`
- **Element spacing**: `mb-2`, `mb-4`, `mb-6`
- **Section margins**: `mt-6`, `mt-20`

---

## 🧩 Components

### Page Structure

```plaintext
Page
├── Header Section (with ambient glows)
│   ├── Label (uppercase, tracking)
│   ├── Title (gradient text)
│   └── Description
├── Content Section
│   ├── Grid of Cards
│   └── CTA / Placeholder Card
└── Footer (if applicable)
```

### Interactive Elements

All interactive elements should include:
- Hover state transitions
- `transition-all duration-300`
- Color or scale changes on hover
- `group` class for parent-child hover effects

---

## ✨ Animations & Micro-interactions

### Framer Motion Patterns

```jsx
// Fade up entrance
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

// Scale entrance (for headlines)
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8, ease: "easeOut" }}

// Staggered cards
transition={{ duration: 0.5, delay: index * 0.1 }}

// Simple fade
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2, duration: 0.5 }}
```

### CSS Transitions

```jsx
// Standard transition
className="transition-all duration-300"

// Color transition
className="transition-colors duration-300"

// Hover scale
className="hover:scale-110 transition-transform"

// Active press effect
className="active:scale-95"
```

### Loading Spinner

```jsx
// Red accent spinner
<div className="w-12 h-12 border-4 border-t-red-500 border-gray-700 rounded-full animate-spin" />
```

---

## 🌌 Backgrounds & Effects

### Ambient Blur Glows

Used behind headers for depth and atmosphere:

```jsx
// Red glow
<div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />

// Blue accent glow
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
```

### Gradient Backgrounds

```jsx
// 3D viewer container
className="bg-gradient-to-br from-gray-900 to-black"

// Text gradient
className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
```

### Glassmorphism

```jsx
// Floating label with backdrop blur
className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
```

---

## 🃏 Cards

### Base Card Style

```jsx
className="bg-[#1a1b1e] rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 shadow-xl group"
```

### Card Features

- **Border Radius**: `rounded-2xl` (16px)
- **Border**: Subtle `border-gray-800`, accent on hover
- **Shadow**: `shadow-xl` for depth
- **Group Hover**: Use `group` class for child animations

### Placeholder / Add Card

```jsx
className="p-8 rounded-2xl border-2 border-dashed border-gray-800 flex flex-col items-center justify-center text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
```

---

## 🔘 Buttons

### Primary Button (Red Gradient)

```jsx
className="text-white text-xs font-semibold px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-900/20 active:scale-95"
```

### Icon Button (Circle)

```jsx
// Default state → Hover state
className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-red-500 group-hover:text-white transition-all duration-300"
```

### Button Shadows

- Primary buttons: `shadow-lg shadow-red-900/20`
- Depth enhancement for dark UI

---

## 💻 Code Examples

### Full Card Component Pattern

```jsx
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1a1b1e] rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 shadow-xl group"
>
    {/* Content */}
</motion.div>
```

### Full Header Pattern

```jsx
<header className="relative pt-32 pb-20 px-6 overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
        >
            Section Label
        </motion.span>
        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
            Main <span className="text-red-600">Headline</span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
            Description text goes here.
        </motion.p>
    </div>
</header>
```

---

## ✅ Checklist for New Pages

When creating a new page, ensure:

- [ ] Background is `bg-[#0f1012]` with `text-white`
- [ ] Header includes ambient blur glows (red primary, blue accent)
- [ ] Headlines use gradient text effect
- [ ] All cards use `rounded-2xl`, `border-gray-800`, and hover effects
- [ ] Framer Motion animations are applied to major elements
- [ ] Buttons use the red gradient with shadow
- [ ] Text hierarchy follows the defined sizes
- [ ] Transitions are `duration-300` by default
- [ ] Group hover effects are used where applicable
- [ ] Loading states use the red-accent spinner

---

## 🛠️ Tech Stack Reference

- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Rendering**: Three.js (dynamic imports)
- **Icons**: Inline SVGs

---

*Last updated: February 3, 2026*
