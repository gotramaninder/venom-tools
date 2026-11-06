/**
 * VENOM OS — Elevation, Optics & Surface Geometry Tokens
 * ANOS-01 Specification: Specular Rim Lighting & Polarized Glass
 */

export const elevation = {
  // Chamfer / Corner Radii (precision sharp, minimal rounding)
  radii: {
    none: '0px',
    sharp: '2px',   // Standard buttons, inputs, panels
    soft: '4px',    // Tooltips, floating dialogs
    chamfer: '6px', // Viewport boundaries
  },

  // Optical Rim Lights & Shadows
  shadows: {
    void: 'none',
    chassis: '0 4px 16px -2px rgba(0, 0, 0, 0.7)',
    elevated: '0 8px 24px -4px rgba(0, 0, 0, 0.85), 0 2px 6px -1px rgba(0, 0, 0, 0.6)',
    floating: '0 16px 40px -8px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.08)',
    crimsonGlow: '0 0 24px -4px rgba(224, 17, 58, 0.25)',
  },

  // Surface Inset Rim Highlights (Specular Edge Effect)
  rimLights: {
    subtle: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
    bright: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
    crimson: 'inset 0 1px 0 0 rgba(255, 42, 85, 0.4)',
  },

  // Glassmorphic Backdrop Filters
  glass: {
    blurDefault: 'blur(20px) saturate(130%) brightness(0.92)',
    blurHeavy: 'blur(32px) saturate(140%) brightness(0.85)',
  },
} as const;

export type ElevationTokens = typeof elevation;
