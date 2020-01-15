import { call, put, select, takeEvery } from 'redux-saga/effects';

import { systemActions, SystemStatus } from '../_system';
import { ClientActions, ClientActionTypes } from './client.actions';
import * as API from './client.api';
import { getClientSummaryListFilters } from './client.selectors';

function* searchClients(): any {
    // get filters
    const filters = yield select(getClientSummaryListFilters);
    console.log('FILTERS', filters);

    if (filters !== {}) {
        // Set loading status
        yield put(systemActions.setStatus(SystemStatus.loading));

        // Try log in the user
        try {
            // Call Auth API (asynchronous, so yield)
            const response = yield call(API.searchList, filters);
            yield put(ClientActions.setClientSummaryList(Array.isArray(response.data) ? response.data : []));
        } catch (error) {
            // If we get an error, set the message
            // yield put({type: REQUEST_ERROR, error: error.message})
            return false;
        } finally {
            // Back to idle
            yield put(systemActions.setStatus(SystemStatus.idle));
        }
    }
}

/**
 * Public Sagas
 */
export function* rootClientSaga(): any {
    yield takeEvery(ClientActionTypes.SetClientSummaryListFilters, searchClients);
}
