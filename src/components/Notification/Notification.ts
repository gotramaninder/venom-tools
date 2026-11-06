/**
 * VENOM OS — Notification / Toast Component Primitive
 * High contrast, dismissible banners & toast stack.
 */

import type { NotificationProps } from '../../types/components.ts';

export function renderNotificationHTML(props: NotificationProps): string {
  const type = props.type || 'info';

  return `
    <div 
      class="vnm-notification vnm-notification-${type}" 
      id="${props.id}" 
      role="alert" 
      aria-live="polite"
    >
      <div class="vnm-notification-content">
        <h4 class="vnm-notification-title">${props.title}</h4>
        <p class="vnm-notification-message">${props.message}</p>
        ${props.timestamp ? `<span class="vnm-mono" style="font-size: 11px; color: var(--vnm-text-alloy); margin-top: 4px; display: block;">${props.timestamp}</span>` : ''}
      </div>
      ${props.dismissible !== false ? `
        <button type="button" class="vnm-notification-close" aria-label="Dismiss notification" data-dismiss-id="${props.id}">
          &times;
        </button>
      ` : ''}
    </div>
  `;
}
