import { Action, ActionsUnion, ActionWithPayload, createAction } from '../../utils/action.helpers';
import { SystemMessage, SystemStatus } from './system.contracts';

/**
 * Action Types
 */
export enum SystemActionTypes {
    SetStatus = 'system/seStatus',
    SetMessage = 'system/addMessage',
    ClearMessage = 'system/clearMessage'
}

/**
 * Actions
 */
export const systemActions = {
    setStatus: (status: SystemStatus): ActionWithPayload<SystemActionTypes.SetStatus, { status: SystemStatus }> =>
        createAction(SystemActionTypes.SetStatus, { status }),
    setMessage: (message: SystemMessage): ActionWithPayload<SystemActionTypes.SetMessage, { message: SystemMessage }> =>
        createAction(SystemActionTypes.SetMessage, { message }),
    clearMessage: (): Action<SystemActionTypes.ClearMessage> => createAction(SystemActionTypes.ClearMessage)
};

// we leverage TypeScript token merging, so our consumer can use `Actions` for both runtime and compile time types
export type SystemActionsUnion = ActionsUnion<typeof systemActions>;
