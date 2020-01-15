import { IModule } from 'redux-dynamic-modules-core';

import { SystemState } from './system.contracts';
import { systemReducer } from './system.reducer';

export function getSystemModule(): IModule<SystemState> {
    return {
        // Unique id of the module
        id: '_system',
        // Maps the Store key to the reducer
        reducerMap: {
            _system: systemReducer
        } as any
    };
}
