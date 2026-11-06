/**
 * VENOM OS — Modal / Dialog Component Primitive
 * Accessible focus trap, keyboard Escape dismissal, backdrop glass blur, and action slots.
 */

import type { ModalProps } from '../../types/components.ts';

export function renderModalHTML(props: ModalProps, bodyContent: string): string {
  const isOpenClass = props.isOpen ? ' vnm-open' : '';

  return `
    <div 
      class="vnm-modal-backdrop${isOpenClass}" 
      id="${props.id}" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="${props.id}-title"
    >
      <div class="vnm-modal">
        <div class="vnm-modal-header">
          <div>
            <h2 class="vnm-modal-title" id="${props.id}-title">${props.title}</h2>
            ${props.subtitle ? `<p class="vnm-input-helper">${props.subtitle}</p>` : ''}
          </div>
          <button type="button" class="vnm-btn vnm-btn-ghost vnm-btn-sm vnm-modal-close" aria-label="Close dialog">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.75">
              <line x1="2" y1="2" x2="12" y2="12"></line>
              <line x1="12" y1="2" x2="2" y2="12"></line>
            </svg>
          </button>
        </div>
        <div class="vnm-modal-body">
          ${bodyContent}
        </div>
        <div class="vnm-modal-footer">
          <button type="button" class="vnm-btn vnm-btn-tactical vnm-modal-cancel">
            ${props.secondaryActionLabel || 'Cancel'}
          </button>
          <button type="button" class="vnm-btn vnm-btn-primary vnm-modal-confirm">
            ${props.primaryActionLabel || 'Confirm Action'}
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initializes accessible focus trapping and keyboard listeners for modals
 */
export function initModal(modalBackdrop: HTMLElement, onClose: () => void) {
  const closeBtn = modalBackdrop.querySelector('.vnm-modal-close');
  const cancelBtn = modalBackdrop.querySelector('.vnm-modal-cancel');
  const modalBox = modalBackdrop.querySelector('.vnm-modal');

  function close() {
    modalBackdrop.classList.remove('vnm-open');
    onClose();
  }

  closeBtn?.addEventListener('click', close);
  cancelBtn?.addEventListener('click', close);

  // Close when clicking outside modal box
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      close();
    }
  });

  // Escape key listener & Focus Trap
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!modalBackdrop.classList.contains('vnm-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }

    if (e.key === 'Tab' && modalBox) {
      const focusables = modalBox.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}
