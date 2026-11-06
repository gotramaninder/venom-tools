/**
 * VENOM OS — Motion & Kinetic Physics Tokens
 * ANOS-01 Specification: Venom Snap, Linear Scans & Reduced Motion Support
 */

export const motion = {
  // Cubic Bezier Easings
  easings: {
    tacticalSnap: 'cubic-bezier(0.16, 1, 0.3, 1)', // The signature Venom snap: fast attack, zero bounce
    smoothDecel: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    sharpAccel: 'cubic-bezier(0.4, 0.0, 1, 1)',
    linearScan: 'linear',
  },

  // Durations
  durations: {
    instant: '0ms',       // For reduced motion / instantaneous state changes
    micro: '80ms',        // Toggles, focus shifts, active states
    fast: '140ms',        // Hover transitions, tooltips
    nominal: '200ms',     // Drawer slides, dropdown expansions
    deliberate: '300ms',  // Modal transitions, viewport morphs
  },

  // Transitions
  transitions: {
    color: 'color 140ms cubic-bezier(0.16, 1, 0.3, 1), background-color 140ms cubic-bezier(0.16, 1, 0.3, 1), border-color 140ms cubic-bezier(0.16, 1, 0.3, 1)',
    transform: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms cubic-bezier(0.16, 1, 0.3, 1)',
    all: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type MotionTokens = typeof motion;
