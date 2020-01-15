import { call, put, takeEvery } from 'redux-saga/effects';

import { systemActions, SystemStatus } from '../_system';
import { PatientActions, PatientActionTypes } from './patient.actions';
import * as API from './patient.api';

function* loadPatientList(): any {
    // Set loading status
    yield put(systemActions.setStatus(SystemStatus.loading));

    // Try log in the user
    try {
        // Call Auth API (asynchronous, so yield)
        const response = yield call(API.loadList);
        yield put(PatientActions.setList(Array.isArray(response.data) ? response.data : []));
    } catch (error) {
        // If we get an error, set the message
        // yield put({type: REQUEST_ERROR, error: error.message})
        return false;
    } finally {
        // Back to idle
        yield put(systemActions.setStatus(SystemStatus.idle));
    }
}

/**
 * Public Sagas
 */
export function* rootPatientSaga(): any {
    yield takeEvery(PatientActionTypes.LoadList, loadPatientList);
}
