/**
 * VENOM OS — Status Indicator & Badge Component Primitive
 * High contrast system indicators with optional pulsing aura.
 */

import type { StatusIndicatorProps } from '../../types/components.ts';

export function renderStatusIndicatorHTML(props: StatusIndicatorProps): string {
  const status = props.status || 'online';
  const pulseClass = props.pulse ? ' vnm-pulse' : '';
  const label = props.label || status.toUpperCase();

  return `
    <span class="vnm-status vnm-status-${status}${pulseClass}" role="status">
      <span class="vnm-status-pip" aria-hidden="true"></span>
      <span class="vnm-status-label">${label}</span>
    </span>
  `;
}

export function renderBadgeHTML(label: string, variant: 'default' | 'crimson' | 'emerald' = 'default'): string {
  const variantClass = variant !== 'default' ? ` vnm-badge-${variant}` : '';
  return `<span class="vnm-badge${variantClass}">${label}</span>`;
}
