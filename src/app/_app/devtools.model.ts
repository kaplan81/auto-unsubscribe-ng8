export interface DevToolsChange extends CustomEvent {
  detail: {
    isOpen: boolean;
    orientation: DevToolsOrientation;
  };
}

export type DevToolsOrientation = 'vertical' | 'horizontal' | undefined;
