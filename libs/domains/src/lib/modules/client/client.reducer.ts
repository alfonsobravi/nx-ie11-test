import produce from 'immer';

import { ClientActionsUnion, ClientActionTypes } from './client.actions';
import { ClientState } from './client.contracts';

/**
 * Reducer
 */
const DEFAULT: ClientState = { summaryList: [], summaryListFilters: {} };

export const clientReducer = (state: ClientState, action: ClientActionsUnion): ClientState =>
    produce(state || DEFAULT, draft => {
        switch (action.type) {
            case ClientActionTypes.SetClientSummaryList:
                draft.summaryList = action.payload.list;
                break;
            case ClientActionTypes.ClearClientSummaryList:
                draft.summaryList = [];
                break;
            case ClientActionTypes.SetClientSummaryListFilters:
                draft.summaryListFilters = action.payload.filters;
                break;
            case ClientActionTypes.ClearClientSummaryListFilters:
                draft.summaryListFilters = {};
                break;
            default:
                return draft;
        }
    });
