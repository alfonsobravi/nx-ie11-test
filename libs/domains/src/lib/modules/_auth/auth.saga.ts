// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place
import { call, fork, put, race, take } from 'redux-saga/effects';

import { setAuthHeaders } from '../../utils/api.helpers';
import { systemActions, SystemMessageSeverity, SystemMessageType, SystemStatus } from '../_system';
import { authActions, AuthActionTypes } from './auth.actions';
import * as API from './auth.api';
import { UserCredentials } from './auth.contracts';

// Little helper function to abstract going to different pages
// TODO: move somewhere else, clearly reusable
function forwardTo(history: any, location: string): void {
    history.push(location);
}

/**
 * Effect to handle authorization
 * @param  {string} username               The username of the user
 * @param  {string} password               The password of the user
 * @param  {object} options                Options
 * @param  {boolean} options.isRegistering Is this a register request?
 */
export function* authorize(userCredentials: UserCredentials): any {
    // Set loading status
    yield put(systemActions.setStatus(SystemStatus.loading));
    yield put(systemActions.clearMessage());

    // Try log in the user
    try {
        // Call Auth API (asynchronous, so yield)
        const response = yield call(API.validateUser, userCredentials);
        return response;
    } catch (error) {
        // If we get an error, set the message
        yield put(
            systemActions.setMessage({
                message: error.response.data,
                type: SystemMessageType.security,
                severity: SystemMessageSeverity.error
            })
        );
        return false;
    } finally {
        // No matter what, back to idle
        yield put(systemActions.setStatus(SystemStatus.idle));
    }
}

/**
 * Effect to handle logging out
 */
// export function* logout() {
//     // We tell Redux we're in the middle of a request
//     //   yield put({type: SENDING_REQUEST, sending: true})

//     // Similar to above, we try to log out by calling the `logout` function in the
//     // `auth` module. If we get an error, we send an appropiate action. If we don't,
//     // we return the response.
//     try {
//         // const response = yield call(auth.logout)
//         // yield put({type: SENDING_REQUEST, sending: false})

//         return true; // response
//     }
//     catch (error) {
//         // yield put({type: REQUEST_ERROR, error: error.message})
//     }
// }

/**
 * Log in saga
 */
export function* loginFlow(): any {
    while (true) {
        const request = yield take(AuthActionTypes.ValidateUser);
        // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
        // lead to a race condition. This is unlikely, but just in case, we call `race` which
        // returns the "winner", the one that finished first
        const winner = yield race({
            auth: call(authorize, request.payload.userCredentials),
            logout: take('LOGOUT')
        });

        // If `authorize` was the winner & we have a token
        if (winner.auth && winner.auth.data.accessToken) {
            // Send Redux appropiate actions
            yield put(authActions.setUserToken(winner.auth.data.accessToken));
            // Setup axios default auth headers
            setAuthHeaders(winner.auth.data.accessToken);
            // Redirect
            yield call(forwardTo, request.payload.history, '/patients');
        }
    }
}

/**
 * Log out saga
 * This is basically the same as the `if (winner.logout)` of above, just written
 * as a saga that is always listening to `LOGOUT` actions
 */
export function* logoutFlow(): any {
    while (true) {
        const request = yield take(AuthActionTypes.LogoutUser);
        yield put(authActions.setUserToken());

        yield call(forwardTo, request.payload.history, '/');
    }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* rootAuthSaga(): any {
    yield fork(loginFlow);
    yield fork(logoutFlow);
}
