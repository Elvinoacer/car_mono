---
name: High-End Automotive Brokerage System
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171c1f'
  on-tertiary-container: '#7f8587'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#dee3e6'
  tertiary-fixed-dim: '#c2c7ca'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#42484a'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-data:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  section-padding: 120px
  technical-grid-gap: 1px
---

## Brand & Style

The design system is engineered to evoke the atmosphere of a private showroom—exclusive, quiet, and authoritative. It targets high-net-worth individuals who value heritage, mechanical precision, and seamless service. 

The visual style is **Minimalist**, leaning on extreme whitespace to allow high-fidelity automotive photography to breathe. The aesthetic balances the warmth of legacy (via serif typography and gold accents) with the cold, hard precision of engineering (via charcoal tones and metallic silvers). Every interaction is deliberate and paced, avoiding frantic animations in favor of subtle, confident transitions that mirror the smooth operation of a luxury vehicle.

## Colors

The palette is anchored by **Deep Charcoal** (#121212), used for primary text and structural elements to provide a heavy, grounded feel. **Sophisticated Gold** (#C5A059) is used sparingly as a highlight color for call-to-actions, bespoke status indicators, and subtle branding accents, signifying premium value.

**Metallic Silver** (#A8ADB0) serves as a refined secondary tone for borders, icons, and technical data, mimicking machined metal. The background is a crisp, unblemished white to maximize contrast and ensure the vehicle's paintwork in imagery remains the focal point. For status badges, we utilize muted, "heritage" versions of green and red to maintain a sophisticated tone even when communicating urgency.

## Typography

This design system utilizes a high-contrast typographic pairing to signal both "Heritage" and "Precision." 

**Noto Serif** is reserved for headlines and editorial moments. Its classic proportions convey the trustworthiness of a traditional brokerage. 

**Manrope** is used for all functional and technical interfaces. Its geometric clarity ensures that engine specifications, pricing, and performance data are legible at a glance. We utilize an uppercase, tracked-out style for labels and technical data to mimic the instrumentation found in high-end vehicle cockpits.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop, centered with a maximum width of 1440px to ensure line lengths remain comfortable and premium. We utilize a 12-column grid with generous 32px gutters.

Spacing is used as a tool for luxury; horizontal margins are wide, and vertical section padding is aggressive (120px+) to prevent the interface from feeling cluttered. Technical spec tables should use a "molecular" grid with 1px silver borders (the `technical-grid-gap`), creating a clean, architectural look for data.

## Elevation & Depth

To maintain a minimalist profile, depth is communicated through **Low-contrast outlines** and **Ambient shadows**. 

- **Surfaces:** Main content sits on the base white layer. Secondary information or modals use a slightly "lifted" state with a very large, soft shadow (Blur: 40px, Opacity: 4% Black).
- **Borders:** Refined 1px borders in Metallic Silver define functional areas without adding visual weight.
- **Interactions:** Hover states on vehicle cards should not "pop" or "grow" aggressively. Instead, a subtle deepening of the ambient shadow or a slight shift in the gold accent's luminosity is preferred.

## Shapes

The shape language is **Sharp (0px)**. 

Luxury automotive design often oscillates between fluid curves and hard, precision edges. This design system opts for hard edges for all UI containers, buttons, and input fields to reflect architectural stability and mechanical precision. Rounds are reserved exclusively for the vehicles within the photography, allowing the organic shapes of the cars to contrast against the rigid, structured frame of the UI.

## Components

### Buttons & Controls
Primary buttons are solid Deep Charcoal with white text, featuring zero border-radius. Secondary buttons use a Metallic Silver border with a gold hover state. Text within buttons should use the `label-sm` typographic style for a "technical" feel.

### Status Badges
Badges for "Available," "Reserved," and "Sold" use a minimalist pill shape (the only exception to the sharp-edge rule) or a simple square with a 1px border. The text is always uppercase with high letter spacing. "Available" is signaled by a subtle Gold accent rather than green, to stay within the luxury palette.

### Technical Spec Tables
Tables are designed with a 1px silver grid. The left column (Label) uses a muted grey, while the right column (Value) uses the Deep Charcoal `technical-data` style. This creates a clear vertical axis for scanning performance metrics.

### Immersive Media Gallery
The gallery component should be edge-to-edge or follow the container max-width with no visible controls until hover. Pagination is represented by thin, horizontal lines (Metallic Silver) rather than dots, echoing a dashboard's sleekness.

### Information Cards
Vehicle cards feature a "floating" image over a white background with a simple hairline border at the bottom. No heavy box shadows are used; instead, the separation is created through whitespace and typography.