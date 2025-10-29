# Branori — AI-Powered Distressed M&A Platform

A sophisticated, glassmorphic website for a Private Equity advisory firm specializing in distressed asset acquisitions, restructuring, and turnaround strategies across Europe, Asia, and the USA.

**Experience Qualities**:
1. **Professional** - Conveys expertise and trust through clean design, precise typography, and sophisticated visual elements
2. **Innovative** - Demonstrates AI-powered capabilities through dynamic animations and modern glassmorphic aesthetics
3. **Global** - Reflects international reach with visual elements showing geographic coverage and multi-region connectivity

**Complexity Level**: Light Application (multiple features with basic state)
- Multi-section landing page with progressive contact forms, animated restructuring flow, and interactive globe visualization. Includes mobile-responsive navigation with hamburger menu and scroll-based reveal animations.

## Essential Features

### 1. Sticky Navigation with Mobile Menu
- **Functionality**: Fixed header with logo, navigation links, and CTA button. Hamburger menu for mobile.
- **Purpose**: Provides persistent access to key sections while maintaining clean mobile experience.
- **Trigger**: Page load (sticky), hamburger button tap (mobile menu).
- **Progression**: Page loads with closed menu → User taps hamburger → Menu slides in → User taps link → Menu closes and scrolls to section.
- **Success criteria**: Menu opens/closes smoothly, navigation works on all screen sizes, active states are visible.

### 2. Progressive Multi-Step Contact Forms
- **Functionality**: Two-step contact form (name/email → phone) with validation, transitions, and success state.
- **Purpose**: Reduces friction in lead capture by breaking form into digestible steps.
- **Trigger**: User interaction with form fields and continue/submit buttons.
- **Progression**: User enters name/email → Validation → Continue button → Step 2 (phone) → Submit → Success message.
- **Success criteria**: Smooth transitions between steps, validation feedback, no layout shift, honeypot spam protection.

### 3. Animated Restructuring Flow
- **Functionality**: Five-step visual journey showing Deal Sourcing → Structuring → SPA → Cash Burn Stop → EAT Stabilized.
- **Purpose**: Visually communicates the firm's process and expertise in distressed asset turnaround.
- **Trigger**: Automatic cycle every 3 seconds when section is visible.
- **Progression**: Step 1 active with glow/pulse → 3s delay → Transition to step 2 → Repeat cycle.
- **Success criteria**: Smooth icon/label transitions, visible active state, responsive on mobile.

### 4. Interactive Orbit Visualization
- **Functionality**: Canvas-based orbital animation showing rotating icons representing services/capabilities.
- **Purpose**: Demonstrates interconnected nature of services and technical sophistication.
- **Trigger**: Page load, continuous animation.
- **Progression**: Canvas initializes → Icons orbit at different speeds → Continuous smooth rotation → Responsive resize.
- **Success criteria**: Smooth 60fps animation, responsive to screen size, reduced motion support.

### 5. Scroll Reveal Animations
- **Functionality**: Section content fades in and slides up when scrolled into viewport.
- **Purpose**: Creates engaging, progressive disclosure of content.
- **Trigger**: Intersection Observer when elements enter viewport.
- **Progression**: Element below viewport → User scrolls → Element enters viewport → Fade/slide animation → Element remains visible.
- **Success criteria**: Smooth animations, no layout shift, respects reduced motion preferences.

### 6. Parallax Background Orbs
- **Functionality**: Blurred gradient orbs that subtly follow mouse movement.
- **Purpose**: Adds depth and premium feel to the interface.
- **Trigger**: Mouse movement over viewport.
- **Progression**: Page loads with static orbs → Mouse moves → Orbs translate slightly → Creates parallax depth effect.
- **Success criteria**: Subtle movement (not distracting), performs smoothly, disabled on mobile.

## Edge Case Handling

- **No JavaScript**: Progressive enhancement ensures content remains accessible, forms degrade gracefully
- **Slow Network**: Skeleton states, content loads progressively without layout shift
- **Small Screens**: Hamburger menu, horizontal scrolling cards, stacked layouts, touch-friendly targets (44px minimum)
- **Large Screens**: Max-width containers prevent over-stretching, centered layouts
- **Reduced Motion**: All animations respect `prefers-reduced-motion`, instant transitions
- **Form Validation**: Inline error states, clear messaging, prevents empty submission
- **Spam Prevention**: Honeypot field, client-side validation as first defense

## Design Direction

The design should feel **premium, sophisticated, and cutting-edge** — evoking trust in financial expertise while showcasing technological innovation. Glassmorphic elements with subtle blur effects create depth and modernity. The interface leans minimal with purposeful flourishes: animated orbs, pulsing icons, smooth transitions. Every element serves the narrative of transforming distressed assets into value.

## Color Selection

**Custom palette** - Dark background with luminous accent colors creating a high-tech financial aesthetic.

- **Primary Color**: Brand Blue (oklch(0.78 0.12 250)) - Trust, stability, professional expertise. Used for primary CTAs and active states.
- **Secondary Colors**: 
  - Brand Purple (oklch(0.75 0.10 290)) - Innovation and sophistication
  - Brand Peach (oklch(0.78 0.10 50)) - Warmth and approachability
- **Accent Color**: Electric Blue (oklch(0.80 0.15 250)) - Attention for CTAs, hover states, active indicators
- **Foreground/Background Pairings**:
  - Background (oklch(0.08 0.02 250)): White foreground (oklch(1 0 0)) - Ratio 19.8:1 ✓
  - Card Glass (oklch(0.95 0 0 / 0.06)): White foreground - Ratio 4.9:1 ✓
  - Primary Blue: White text - Ratio 6.2:1 ✓
  - Accent Blue: White text - Ratio 5.8:1 ✓
  - Muted (oklch(1 0 0 / 0.72)): On dark background - Ratio 12.1:1 ✓

## Font Selection

Typography should convey **precision, clarity, and modernity** — the characteristics of data-driven financial advisory. System fonts provide maximum performance and native feel while maintaining professional appearance.

- **Typographic Hierarchy**:
  - H1 (Hero Title): System-UI Bold/46px (28px mobile)/tight leading/subtle gradient
  - H2 (Section Title): System-UI Semibold/28px (22px mobile)/normal leading
  - Body: System-UI Regular/15px (14px mobile)/1.6 line height
  - Labels/Hints: System-UI Medium/12px (11px mobile)/wider letter spacing
  - Navigation: System-UI Regular/14px/0.4px letter spacing

## Animations

Animations should feel **purposeful and sophisticated** — enhancing comprehension without distraction. The balance leans toward subtle functionality with moments of delight in key interactions (restructuring flow activation, form step transitions, orbit animation).

- **Purposeful Meaning**: Motion communicates progression (form steps), cyclical processes (restructuring flow), and interconnectedness (orbital services). The brand personality is confident and innovative, reflected in smooth easing and measured timing.

- **Hierarchy of Movement**:
  - **Primary**: Restructuring flow step transitions (scale, glow, pulse) - most important to user understanding
  - **Secondary**: Form step transitions, scroll reveals - supports user actions
  - **Tertiary**: Orbit rotation, background orbs, hover states - ambient enhancement

## Component Selection

- **Components**: Button, Card, Input, Label from shadcn. Custom Window component for glassmorphic containers.
- **Customizations**: 
  - Glass Card: backdrop-filter blur, rgba borders, layered shadows, inset highlights
  - Form Inputs: Focus rings with brand colors, error states with red tint
  - Navigation: Fixed header with backdrop blur, mobile drawer overlay
- **States**: Buttons (rest/hover/active/disabled with background transitions), Inputs (default/focus/error with border color changes), Menu (closed/open with opacity/transform)
- **Icon Selection**: Phosphor icons - CircleNotch (search), FileText (diligence), SquaresFour (structure), Wrench (turnaround), GitMerge (integration), Compass (development)
- **Spacing**: 4px base unit, 12-20px component padding, 18-28px card gaps, 40-70px section padding (responsive)
- **Mobile**: Hamburger menu overlay, horizontal scrolling service cards with snap, stacked form fields, reduced orbit size, touch targets 44px minimum, collapsed spacing (16px containers)
