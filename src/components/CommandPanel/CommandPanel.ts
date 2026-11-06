/**
 * VENOM OS — Command Panel Component Primitive (Cmd+K / Ctrl+K)
 * Keyboard-first navigation, search filtering, and quick actions.
 */

import type { CommandPanelProps } from '../../types/components.ts';

export function renderCommandPanelHTML(props: CommandPanelProps): string {
  const isOpenClass = props.isOpen ? ' vnm-open' : '';

  return `
    <div 
      class="vnm-command-backdrop${isOpenClass}" 
      id="vnm-command-palette" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Tactical Command Palette"
    >
      <div class="vnm-command-panel">
        <div class="vnm-command-input-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 12px; color: var(--vnm-text-alloy);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="vnm-command-input" 
            id="vnm-command-search-input" 
            placeholder="${props.placeholder || 'Type an action or search protocols...'}" 
            autocomplete="off" 
            spellcheck="false" 
          />
          <span class="vnm-command-shortcut">ESC</span>
        </div>
        <ul class="vnm-command-list" id="vnm-command-action-list" role="listbox">
          ${props.actions.map((act, index) => `
            <li 
              class="vnm-command-item${index === 0 ? ' vnm-active' : ''}" 
              role="option" 
              data-action-id="${act.id}"
            >
              <div style="display: flex; align-items: center; gap: 10px;">
                <span class="vnm-mono" style="color: var(--vnm-crimson-core); font-size: 11px;">[${act.category}]</span>
                <span>${act.title}</span>
              </div>
              ${act.shortcut ? `<span class="vnm-command-shortcut">${act.shortcut}</span>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

/**
 * Initializes global Cmd+K / Ctrl+K keyboard shortcut and palette navigation
 */
export function initCommandPaletteEvents() {
  const backdrop = document.getElementById('vnm-command-palette');
  const input = document.getElementById('vnm-command-search-input') as HTMLInputElement;
  const list = document.getElementById('vnm-command-action-list');
  if (!backdrop || !input || !list) return;

  function openPalette() {
    backdrop.classList.add('vnm-open');
    input.value = '';
    input.focus();
  }

  function closePalette() {
    backdrop.classList.remove('vnm-open');
  }

  // Global keyboard shortcut
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('vnm-open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && backdrop.classList.contains('vnm-open')) {
      e.preventDefault();
      closePalette();
    }
  });

  // Backdrop click to close
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });
}
