/**
 * VENOM OS — Component Interfaces & State Type Definitions
 * Strict typing across all 10 architectural primitives and required states.
 */

// Universal Component State Spectrum
export type ComponentState = 
  | 'default'
  | 'hover'
  | 'active'
  | 'focus'
  | 'disabled'
  | 'loading'
  | 'success'
  | 'error';

export type ComponentSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'tactical' | 'ghost' | 'danger';
export type StatusLevel = 'online' | 'idle' | 'busy' | 'error' | 'offline';
export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'tactical';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

// 1. Button Props
export interface ButtonProps {
  id?: string;
  label: string;
  variant?: ButtonVariant;
  size?: ComponentSize;
  state?: ComponentState;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: string;
  iconRight?: string;
  ariaLabel?: string;
  onClick?: (e: MouseEvent) => void;
}

// 2. Input Props
export interface InputProps {
  id: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'search' | 'number' | 'email';
  state?: ComponentState;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  iconPrefix?: string;
  iconSuffix?: string;
  onChange?: (val: string) => void;
}

// 3. Dropdown Props & Option
export interface DropdownOption {
  value: string;
  label: string;
  badge?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  id: string;
  label: string;
  options: DropdownOption[];
  selectedValue?: string;
  placeholder?: string;
  state?: ComponentState;
  disabled?: boolean;
  loading?: boolean;
  helperText?: string;
  errorMessage?: string;
  onSelect?: (option: DropdownOption) => void;
}

// 4. Modal Props
export interface ModalProps {
  id: string;
  title: string;
  subtitle?: string;
  isOpen: boolean;
  state?: ComponentState;
  onClose: () => void;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
}

// 5. Tooltip Props
export interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  state?: ComponentState;
  targetId: string;
}

// 6. Navigation Props
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  isActive?: boolean;
  disabled?: boolean;
}

export interface NavigationProps {
  id: string;
  items: NavItem[];
  activeItemId: string;
  orientation?: 'horizontal' | 'vertical';
  isCollapsed?: boolean;
  state?: ComponentState;
  onSelect: (itemId: string) => void;
}

// 7. Notification Props
export interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp?: string;
  state?: ComponentState;
  dismissible?: boolean;
  onDismiss?: (id: string) => void;
}

// 8. Command Panel Props & Action
export interface CommandAction {
  id: string;
  title: string;
  category: string;
  shortcut?: string;
  icon?: string;
  disabled?: boolean;
}

export interface CommandPanelProps {
  isOpen: boolean;
  actions: CommandAction[];
  state?: ComponentState;
  placeholder?: string;
  onSelect: (action: CommandAction) => void;
  onClose: () => void;
}

// 9. Status Indicator Props
export interface StatusIndicatorProps {
  status: StatusLevel;
  label?: string;
  pulse?: boolean;
  state?: ComponentState;
  size?: ComponentSize;
}

// 10. Execution Stream Props
export interface ExecutionStep {
  stepId: string;
  title: string;
  status: 'pending' | 'running' | 'success' | 'failed';
  timestamp: string;
  details?: string;
}

export interface ExecutionStreamProps {
  id: string;
  streamTitle: string;
  /**
   * CRITICAL REQUIREMENT 8:
   * Do not display fabricated system telemetry.
   * Clearly labelled mock data only in preview mode.
   */
  isPreviewMode: boolean;
  previewDisclaimer?: string;
  steps: ExecutionStep[];
  commandExecuted?: string;
  synthesisOutput?: string;
  state?: ComponentState;
}
