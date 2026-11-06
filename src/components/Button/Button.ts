/**
 * VENOM OS — Button Component Primitive
 * Supports variants, sizes, icon slots, loading spinners, and all states.
 */

import type { ButtonProps } from '../../types/components.ts';

export function createButton(props: ButtonProps): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  if (props.id) btn.id = props.id;

  const variant = props.variant || 'tactical';
  const size = props.size || 'md';
  const state = props.state || 'default';

  btn.className = `vnm-btn vnm-btn-${variant} vnm-btn-${size}`;

  if (state !== 'default') {
    btn.classList.add(`vnm-state-${state}`);
  }

  if (props.disabled || state === 'disabled') {
    btn.disabled = true;
    btn.classList.add('vnm-state-disabled');
    btn.setAttribute('aria-disabled', 'true');
  }

  if (props.loading || state === 'loading') {
    btn.classList.add('vnm-state-loading');
    btn.setAttribute('aria-busy', 'true');
  }

  if (props.ariaLabel) {
    btn.setAttribute('aria-label', props.ariaLabel);
  }

  // Icons and Content
  if (props.iconLeft) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'vnm-btn-icon-left';
    iconSpan.innerHTML = props.iconLeft;
    btn.appendChild(iconSpan);
  }

  const labelSpan = document.createElement('span');
  labelSpan.className = 'vnm-btn-label';
  labelSpan.textContent = props.label;
  btn.appendChild(labelSpan);

  if (props.iconRight) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'vnm-btn-icon-right';
    iconSpan.innerHTML = props.iconRight;
    btn.appendChild(iconSpan);
  }

  if (props.onClick && !props.disabled) {
    btn.addEventListener('click', (e) => props.onClick!(e));
  }

  return btn;
}

export function renderButtonHTML(props: ButtonProps): string {
  const variant = props.variant || 'tactical';
  const size = props.size || 'md';
  const state = props.state || 'default';
  const stateClass = state !== 'default' ? ` vnm-state-${state}` : '';
  const disabledAttr = props.disabled || state === 'disabled' ? ' disabled aria-disabled="true"' : '';
  const loadingAttr = props.loading || state === 'loading' ? ' aria-busy="true"' : '';
  const idAttr = props.id ? ` id="${props.id}"` : '';
  const ariaAttr = props.ariaLabel ? ` aria-label="${props.ariaLabel}"` : '';

  return `<button type="button"${idAttr} class="vnm-btn vnm-btn-${variant} vnm-btn-${size}${stateClass}"${disabledAttr}${loadingAttr}${ariaAttr}>
    ${props.iconLeft ? `<span class="vnm-btn-icon-left">${props.iconLeft}</span>` : ''}
    <span class="vnm-btn-label">${props.label}</span>
    ${props.iconRight ? `<span class="vnm-btn-icon-right">${props.iconRight}</span>` : ''}
  </button>`;
}
