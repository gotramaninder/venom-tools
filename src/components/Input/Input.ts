/**
 * VENOM OS — Input Component Primitive
 * Supports prefix/suffix icons, helper texts, validation states, and accessibility attributes.
 */

import type { InputProps } from '../../types/components.ts';

export function renderInputHTML(props: InputProps): string {
  const type = props.type || 'text';
  const state = props.state || 'default';
  const stateClass = state !== 'default' ? ` vnm-state-${state}` : '';
  const disabledAttr = props.disabled || state === 'disabled' ? ' disabled aria-disabled="true"' : '';
  const requiredAttr = props.required ? ' required' : '';
  const readonlyAttr = props.readOnly ? ' readonly' : '';
  const valAttr = props.value ? ` value="${props.value}"` : '';
  const placeholderAttr = props.placeholder ? ` placeholder="${props.placeholder}"` : '';

  let helperMarkup = '';
  if (state === 'error' && props.errorMessage) {
    helperMarkup = `<span class="vnm-input-helper vnm-error" id="${props.id}-desc">${props.errorMessage}</span>`;
  } else if (state === 'success' && props.successMessage) {
    helperMarkup = `<span class="vnm-input-helper vnm-success" id="${props.id}-desc">${props.successMessage}</span>`;
  } else if (props.helperText) {
    helperMarkup = `<span class="vnm-input-helper" id="${props.id}-desc">${props.helperText}</span>`;
  }

  const ariaDescribedBy = helperMarkup ? ` aria-describedby="${props.id}-desc"` : '';
  const ariaInvalid = state === 'error' ? ' aria-invalid="true"' : '';

  return `
    <div class="vnm-input-group">
      <label class="vnm-label" for="${props.id}">${props.label}${props.required ? ' *' : ''}</label>
      <div class="vnm-input-wrapper${stateClass}">
        ${props.iconPrefix ? `<span class="vnm-input-icon vnm-prefix">${props.iconPrefix}</span>` : ''}
        <input 
          type="${type}" 
          id="${props.id}" 
          name="${props.name}" 
          class="vnm-input"${valAttr}${placeholderAttr}${disabledAttr}${requiredAttr}${readonlyAttr}${ariaDescribedBy}${ariaInvalid} 
        />
        ${props.iconSuffix ? `<span class="vnm-input-icon vnm-suffix">${props.iconSuffix}</span>` : ''}
      </div>
      ${helperMarkup}
    </div>
  `;
}
