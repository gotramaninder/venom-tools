/**
 * VENOM OS — Design System Preview Fixtures
 * 
 * STRICT COMPLIANCE REQUIREMENT 8:
 * All records here are static mock fixtures for component showcase testing only.
 * No fabricated runtime telemetry or fake hardware stats are presented.
 */

import type { 
  DropdownOption, 
  NavItem, 
  CommandAction, 
  ExecutionStep 
} from '../types/components.ts';

export const mockDropdownOptions: DropdownOption[] = [
  { value: 'profile_engineer', label: 'Engineering Workspace', badge: 'DEFAULT' },
  { value: 'profile_analyst', label: 'Tactical Analysis Deck' },
  { value: 'profile_executive', label: 'Executive Synthesis' },
  { value: 'profile_isolated', label: 'Air-Gapped Sandbox', badge: 'RESTRICTED' },
];

export const mockNavigationItems: NavItem[] = [
  { id: 'deck', label: 'COMMAND DECK', icon: '◈' },
  { id: 'components', label: 'COMPONENT SUITE', icon: '⬡', badge: '10' },
  { id: 'states', label: 'STATE MATRIX', icon: '◩' },
  { id: 'responsive', label: 'VIEWPORT STACK', icon: '▥' },
  { id: 'tokens', label: 'DESIGN TOKENS', icon: '◎' },
];

export const mockCommandActions: CommandAction[] = [
  { id: 'act_nav_components', title: 'Open Component Showcase', category: 'NAVIGATION', shortcut: 'G C' },
  { id: 'act_toggle_motion', title: 'Toggle Reduced Motion Mode', category: 'ACCESSIBILITY', shortcut: 'M' },
  { id: 'act_test_notification', title: 'Trigger Tactical Notification Toast', category: 'TEST', shortcut: 'T' },
  { id: 'act_open_dialog', title: 'Open Modal Confirmation Dialog', category: 'COMPONENTS', shortcut: 'O' },
  { id: 'act_nav_tokens', title: 'Inspect CSS Design Tokens', category: 'SPEC' },
];

export const mockExecutionSteps: ExecutionStep[] = [
  {
    stepId: 'step_1',
    title: '[PREVIEW] Initializing Design System Runtime Hooks',
    status: 'success',
    timestamp: '12:00:01 UTC',
    details: 'Verified CSS variable declarations and typography font-stack bindings.'
  },
  {
    stepId: 'step_2',
    title: '[PREVIEW] Binding Keyboard Focus Trap & Navigation Listeners',
    status: 'success',
    timestamp: '12:00:02 UTC',
    details: 'Attached Escape key dismissal and Tab-index boundary loops.'
  },
  {
    stepId: 'step_3',
    title: '[PREVIEW] Rendering Component Previews for Review',
    status: 'running',
    timestamp: '12:00:03 UTC',
    details: 'Displaying 10 component primitives across 8 operational states.'
  }
];
