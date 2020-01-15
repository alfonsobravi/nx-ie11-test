import produce from 'immer';

import { AuthActionsUnion, AuthActionTypes } from './auth.actions';
import { AuthState } from './auth.contracts';

/**
 * Reducer
 */
const DEFAULT: AuthState = { accessToken: null };

export const authReducer = (state: AuthState, action: AuthActionsUnion): AuthState =>
    produce(state || DEFAULT, draft => {
        switch (action.type) {
            case AuthActionTypes.SetUserToken:
                draft.accessToken = action.payload.accessToken || null;
                break;
            default:
                return draft;
        }
    });
