import produce from 'immer';

import { SystemActionsUnion, SystemActionTypes } from './system.actions';
import { SystemState, SystemStatus } from './system.contracts';

/**
 * Reducer
 */
const DEFAULT: SystemState = { status: SystemStatus.idle, lastMessage: null };

export const systemReducer = (state: SystemState, action: SystemActionsUnion): SystemState =>
    produce(state || DEFAULT, draft => {
        switch (action.type) {
            case SystemActionTypes.SetStatus:
                draft.status = action.payload.status;
                break;
            case SystemActionTypes.SetMessage:
                draft.lastMessage = action.payload.message;
                break;
            case SystemActionTypes.ClearMessage:
                draft.lastMessage = null;
                break;
            default:
                return draft;
        }
    });
