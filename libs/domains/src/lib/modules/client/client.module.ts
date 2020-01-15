import { ISagaModule } from 'redux-dynamic-modules-saga';

import { ClientState } from './client.contracts';
import { clientReducer } from './client.reducer';
import { rootClientSaga } from './client.saga';

// depends on authModule
// https://github.com/microsoft/redux-dynamic-modules/issues/36
export function getClientModule(): [ISagaModule<ClientState>] {
    return [
        {
            // Unique id of the module
            id: 'client',
            // Maps the Store key to the reducer
            reducerMap: {
                client: clientReducer
            } as any,
            // Initial actions array for this module
            initialActions: [],
            // Sagas for this module
            // if no sagas are used, omit the parameter and the function type can be simplified to IModule
            sagas: [rootClientSaga]
        }
    ];
}
