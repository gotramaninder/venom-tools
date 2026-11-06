/**
 * VENOM OS — Unified Design Tokens Master Export
 */

export * from './colors.ts';
export * from './typography.ts';
export * from './spacing.ts';
export * from './elevation.ts';
export * from './motion.ts';

import { colors } from './colors.ts';
import { typography } from './typography.ts';
import { spacing } from './spacing.ts';
import { elevation } from './elevation.ts';
import { motion } from './motion.ts';

export const tokens = {
  colors,
  typography,
  spacing,
  elevation,
  motion,
} as const;

export default tokens;
