/**
 * VENOM OS — Spectral Color Design Tokens
 * ANOS-01 Specification: Obsidian, Graphite, Crimson, Titanium
 */

export const colors = {
  // Substrate / Void Spectrum
  substrate: {
    void: '#030406',
    obsidian: '#07080C',
    surfaceBlade: '#0C0E14',
    surfaceElevated: '#12151F',
    surfaceActive: '#1A1E2C',
    surfaceHover: '#151924',
    glassBackdrop: 'rgba(12, 14, 20, 0.78)',
  },

  // Tactical Crimson Spectrum
  crimson: {
    core: '#E0113A',
    pulse: '#FF1C47',
    deep: '#4A0612',
    tint: 'rgba(224, 17, 58, 0.08)',
    dim: 'rgba(224, 17, 58, 0.16)',
    glow: 'rgba(224, 17, 58, 0.28)',
    border: 'rgba(224, 17, 58, 0.45)',
  },

  // Metallic & Titanium Spectrum
  metallic: {
    specular: '#F5F7FA', // Pure active contrast (WCAG AAA)
    chrome: '#D8DEE9',   // Primary readable text
    titanium: '#A6B0C0', // Secondary descriptions
    alloy: '#687385',    // Micro datums & tertiary elements
    lead: '#394150',     // Inactive elements & disabled state
  },

  // State & Diagnostic Sub-Palettes (Strictly Controlled <5% Area)
  status: {
    emerald: {
      core: '#10B981',
      tint: 'rgba(16, 185, 129, 0.12)',
      border: 'rgba(16, 185, 129, 0.35)',
    },
    amber: {
      core: '#F59E0B',
      tint: 'rgba(245, 158, 11, 0.12)',
      border: 'rgba(245, 158, 11, 0.35)',
    },
    cyan: {
      core: '#38BDF8',
      tint: 'rgba(56, 189, 248, 0.12)',
      border: 'rgba(56, 189, 248, 0.35)',
    },
    danger: {
      core: '#EF4444',
      tint: 'rgba(239, 68, 68, 0.14)',
      border: 'rgba(239, 68, 68, 0.45)',
    },
  },

  // Borders & Specular Hairlines
  border: {
    subtle: 'rgba(255, 255, 255, 0.05)',
    edge: 'rgba(255, 255, 255, 0.10)',
    bright: 'rgba(255, 255, 255, 0.18)',
    focus: '#E0113A',
  },
} as const;

export type ColorTokens = typeof colors;
