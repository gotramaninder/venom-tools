/**
 * VENOM OS — Dropdown / Select Component Primitive
 * Accessible keyboard navigation (Arrow keys, Enter, Esc), ARIA compliance, and state matrices.
 */

import type { DropdownProps } from '../../types/components.ts';

export function renderDropdownHTML(props: DropdownProps): string {
  const selected = props.options.find(o => o.value === props.selectedValue);
  const displayLabel = selected ? selected.label : (props.placeholder || 'Select Option');
  const state = props.state || 'default';
  const stateClass = state !== 'default' ? ` vnm-state-${state}` : '';
  const disabledAttr = props.disabled || state === 'disabled' ? ' disabled aria-disabled="true"' : '';

  return `
    <div class="vnm-input-group">
      <label class="vnm-label" id="${props.id}-label">${props.label}</label>
      <div class="vnm-dropdown" id="${props.id}">
        <button 
          type="button" 
          class="vnm-dropdown-trigger${stateClass}" 
          id="${props.id}-trigger" 
          aria-haspopup="listbox" 
          aria-expanded="false" 
          aria-labelledby="${props.id}-label ${props.id}-trigger"${disabledAttr}
        >
          <span class="vnm-dropdown-label">${displayLabel}</span>
          <svg class="vnm-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="3 4.5 6 7.5 9 4.5"></polyline>
          </svg>
        </button>
        <ul 
          class="vnm-dropdown-menu" 
          id="${props.id}-menu" 
          role="listbox" 
          aria-labelledby="${props.id}-label" 
          tabindex="-1"
        >
          ${props.options.map(opt => `
            <li 
              class="vnm-dropdown-item${opt.value === props.selectedValue ? ' vnm-selected' : ''}" 
              role="option" 
              data-value="${opt.value}" 
              aria-selected="${opt.value === props.selectedValue ? 'true' : 'false'}"
            >
              <span>${opt.label}</span>
              ${opt.badge ? `<span class="vnm-badge">${opt.badge}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
      ${props.errorMessage ? `<span class="vnm-input-helper vnm-error">${props.errorMessage}</span>` : ''}
    </div>
  `;
}

/**
 * Initializes keyboard navigation and interactions for all dropdowns on a page
 */
export function initDropdownEvents(container: HTMLElement = document.body) {
  const dropdowns = container.querySelectorAll<HTMLElement>('.vnm-dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector<HTMLButtonElement>('.vnm-dropdown-trigger');
    const menu = dropdown.querySelector<HTMLUListElement>('.vnm-dropdown-menu');
    const items = dropdown.querySelectorAll<HTMLLIElement>('.vnm-dropdown-item');
    if (!trigger || !menu) return;

    let activeIndex = -1;

    function openMenu() {
      menu.classList.add('vnm-open');
      trigger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      menu.classList.remove('vnm-open');
      trigger.setAttribute('aria-expanded', 'false');
      activeIndex = -1;
      items.forEach(i => i.classList.remove('vnm-highlighted'));
    }

    trigger.addEventListener('click', () => {
      const isOpen = menu.classList.contains('vnm-open');
      if (isOpen) closeMenu();
      else openMenu();
    });

    trigger.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
        if (items.length > 0) {
          activeIndex = 0;
          items[0].classList.add('vnm-highlighted');
        }
      } else if (e.key === 'Escape') {
        closeMenu();
      }
    });

    menu.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        items.forEach(i => i.classList.remove('vnm-highlighted'));
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex].classList.add('vnm-highlighted');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        items.forEach(i => i.classList.remove('vnm-highlighted'));
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        items[activeIndex].classList.add('vnm-highlighted');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          selectItem(items[activeIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        trigger.focus();
      }
    });

    function selectItem(item: HTMLLIElement) {
      items.forEach(i => {
        i.setAttribute('aria-selected', 'false');
        i.classList.remove('vnm-selected');
      });
      item.setAttribute('aria-selected', 'true');
      item.classList.add('vnm-selected');
      
      const labelSpan = item.querySelector('span');
      const triggerLabel = trigger.querySelector('.vnm-dropdown-label');
      if (labelSpan && triggerLabel) {
        triggerLabel.textContent = labelSpan.textContent;
      }
      closeMenu();
      trigger.focus();
    }

    items.forEach(item => {
      item.addEventListener('click', () => selectItem(item));
    });

    // Close on outside click
    document.addEventListener('click', (e: MouseEvent) => {
      if (!dropdown.contains(e.target as Node)) {
        closeMenu();
      }
    });
  });
}
