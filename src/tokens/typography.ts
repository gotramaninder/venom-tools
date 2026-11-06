/**
 * VENOM OS — Typography Design Tokens
 * ANOS-01 Specification: High-Legibility Technical Sans & Tabular Monospace
 * Accessible, readable font-scales adhering to WCAG standards.
 */

export const typography = {
  fonts: {
    display: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sans: "'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Geist Mono', 'SF Mono', Consolas, monospace",
  },

  // Font Sizes (calibrated for high legibility, minimum base 14px)
  sizes: {
    nano: '0.6875rem',    // 11px (Strictly uppercase metadata / micro-tags)
    micro: '0.75rem',     // 12px (Secondary badges, datum timestamps)
    caption: '0.8125rem', // 13px (Helper labels, input descriptors)
    bodySm: '0.875rem',   // 14px (Standard UI controls, compact body)
    body: '1rem',         // 16px (Primary reading body, paragraphs)
    bodyLg: '1.125rem',   // 18px (Prominent text, sub-panel anchors)
    h3: '1.25rem',        // 20px (Module section titles)
    h2: '1.5rem',         // 24px (Blade titles, primary card headers)
    h1: '1.875rem',       // 30px (Main command viewport headers)
    display: '2.5rem',    // 40px (Hero operational displays)
  },

  // Line Heights (optimized for scannability and accessibility)
  lineHeights: {
    tight: '1.2',
    snug: '1.35',
    normal: '1.5',
    relaxed: '1.65',
  },

  // Font Weights
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.035em',
    tight: '-0.015em',
    normal: '0em',
    wide: '+0.04em',
    wider: '+0.08em',
    widest: '+0.12em',
  },
} as const;

export type TypographyTokens = typeof typography;
