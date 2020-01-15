import { ISagaModule } from 'redux-dynamic-modules-saga';

import { PatientActions } from './patient.actions';
import { PatientState } from './patient.contracts';
import { patientReducer } from './patient.reducer';
import { rootPatientSaga } from './patient.saga';

// depends on authModule
// https://github.com/microsoft/redux-dynamic-modules/issues/36
export function getPatientModule(): [ISagaModule<PatientState>] {
    return [
        {
            // Unique id of the module
            id: 'patient',
            // Maps the Store key to the reducer
            reducerMap: {
                patient: patientReducer
            } as any,
            // Initial actions array for this module
            initialActions: [PatientActions.loadList()],
            // Sagas for this module
            // if no sagas are used, omit the parameter and the function type can be simplified to IModule
            sagas: [rootPatientSaga]
        }
    ];
}
