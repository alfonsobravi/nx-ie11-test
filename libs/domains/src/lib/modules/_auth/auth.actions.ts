import * as H from 'history';

import { ActionsUnion, ActionWithPayload, createAction } from '../../utils/action.helpers';
import { UserCredentials } from './auth.contracts';

/**
 * Action Types
 */
export enum AuthActionTypes {
    ValidateUser = 'auth/validateUser',
    SetUserToken = 'auth/setUserToken',
    LogoutUser = 'auth/logoutUser'
}

/**
 * Actions
 */
export const authActions = {
    validateUser: (
        userCredentials: UserCredentials,
        history: H.History<any>
    ): ActionWithPayload<AuthActionTypes.ValidateUser, { userCredentials: UserCredentials; history: H.History<any> }> =>
        createAction(AuthActionTypes.ValidateUser, { userCredentials, history }),
    setUserToken: (accessToken?: string): ActionWithPayload<AuthActionTypes.SetUserToken, { accessToken?: string }> =>
        createAction(AuthActionTypes.SetUserToken, { accessToken }),
    unsetUserToken: (
        history: H.History<any>
    ): ActionWithPayload<AuthActionTypes.LogoutUser, { history: H.History<any> }> =>
        createAction(AuthActionTypes.LogoutUser, { history })
};

// we leverage TypeScript token merging, so our consumer can use `Actions` for both runtime and compile time types
export type AuthActionsUnion = ActionsUnion<typeof authActions>;
