export enum SystemStatus {
    idle,
    loading
}

export enum SystemMessageSeverity {
    info,
    warning,
    error,
    critical
}

export enum SystemMessageType {
    network,
    security,
    storage,
    state,
    ui
}

export interface SystemMessage {
    severity: SystemMessageSeverity;
    type: SystemMessageType;
    message: string;
    body?: any;
}

export interface SystemState {
    status: SystemStatus;
    lastMessage: SystemMessage | null;
}
