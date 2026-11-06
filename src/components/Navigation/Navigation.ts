/**
 * VENOM OS — Navigation Component Primitive
 * Tactical top datum bar, modular vertical rail, and active crimson indicators.
 */

import type { NavigationProps } from '../../types/components.ts';

export function renderNavigationBarHTML(props: NavigationProps): string {
  return `
    <nav class="vnm-nav-bar" id="${props.id}" aria-label="System Horizon Bar">
      <div class="vnm-nav-brand">
        <span class="vnm-nav-brand-pip"></span>
        <span>VENOM OS</span>
      </div>
      <ul class="vnm-nav-items" role="menubar">
        ${props.items.map(item => {
          const isActive = item.id === props.activeItemId;
          return `
            <li role="none">
              <a 
                href="#${item.id}" 
                class="vnm-nav-link${isActive ? ' vnm-active' : ''}" 
                role="menuitem" 
                data-nav-id="${item.id}"
                aria-current="${isActive ? 'page' : 'false'}"
              >
                <span class="vnm-nav-icon">${item.icon}</span>
                <span class="vnm-nav-label">${item.label}</span>
                ${item.badge ? `<span class="vnm-badge">${item.badge}</span>` : ''}
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    </nav>
  `;
}
