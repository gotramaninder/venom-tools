/**
 * VENOM OS — Spacing & Layout Grid Tokens
 * ANOS-01 Specification: 4px Base Multiplier & 24-Column Dynamic Grid
 */

export const spacing = {
  // Atomic Spacing Scale
  sp1: '2px',    // Hairlines, bevel borders
  sp2: '4px',    // Micro gaps, chip internal padding
  sp3: '8px',    // Icon-to-label gaps, tight list items
  sp4: '12px',   // Standard input/button internal padding
  sp5: '16px',   // Panel interior padding, standard card margins
  sp6: '24px',   // Section boundaries, blade gaps
  sp8: '32px',   // Primary viewport division, header heights
  sp10: '40px',  // Sub-deck height, utility rails
  sp12: '48px',  // Dock rail widths, touch target minimum
  sp16: '64px',  // Large workspace gutters
  sp20: '80px',  // Command deck margin
  sp24: '96px',  // Viewport offsets

  // Touch Target Accessibility Compliance
  minInteractiveTarget: '44px',

  // Layout Boundaries
  layout: {
    telemetryRailWidth: '280px',
    inspectorBladeWidth: '360px',
    topDatumHeight: '36px',
    bottomDeckHeight: '40px',
    modalMaxWidth: '640px',
    commandPanelWidth: '580px',
  },

  // Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    ultrawide: '2160px',
  },
} as const;

export type SpacingTokens = typeof spacing;
