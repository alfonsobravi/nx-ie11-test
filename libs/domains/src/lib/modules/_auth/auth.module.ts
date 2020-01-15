import { IModule } from 'redux-dynamic-modules-core';
import { ISagaModule } from 'redux-dynamic-modules-saga';

import { getSystemModule, SystemState } from '../_system';
import { AuthState } from './auth.contracts';
import { authReducer } from './auth.reducer';
import AuthSaga from './auth.saga';

export function getAuthModule(): [IModule<SystemState>, ISagaModule<AuthState>] {
    return [
        getSystemModule(),
        {
            // Unique id of the module
            id: '_auth',
            // Maps the Store key to the reducer
            reducerMap: {
                _auth: authReducer
            } as any,
            // Initial actions array for this module
            initialActions: [],
            // Sagas for this module
            // if no sagas are used, omit the parameter and the function type can be simplified to IModule
            sagas: [AuthSaga]
        }
    ];
}
