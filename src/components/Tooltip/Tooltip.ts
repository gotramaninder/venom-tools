/**
 * VENOM OS — Tooltip Component Primitive
 * Directional positioning, keyboard focus trigger, ARIA role="tooltip".
 */

import type { TooltipProps } from '../../types/components.ts';

export function renderTooltipHTML(props: TooltipProps, triggerContent: string): string {
  const position = props.position || 'top';
  const stateClass = props.state === 'hover' || props.state === 'focus' ? ' vnm-visible' : '';

  return `
    <div class="vnm-tooltip-wrapper" tabindex="0" aria-describedby="${props.targetId}-tt">
      ${triggerContent}
      <div 
        class="vnm-tooltip vnm-tooltip-${position}${stateClass}" 
        id="${props.targetId}-tt" 
        role="tooltip"
      >
        ${props.content}
      </div>
    </div>
  `;
}
