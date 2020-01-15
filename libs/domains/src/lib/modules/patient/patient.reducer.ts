import produce from 'immer';

import { PatientActionsUnion, PatientActionTypes } from './patient.actions';
import { PatientState } from './patient.contracts';

/**
 * Reducer
 */
const DEFAULT: PatientState = { list: [] };

export const patientReducer = (state: PatientState, action: PatientActionsUnion): PatientState =>
    produce(state || DEFAULT, draft => {
        switch (action.type) {
            case PatientActionTypes.SetList:
                draft.list = action.payload.list;
                break;
            case PatientActionTypes.ToggleStar:
                draft.list[action.payload.id].starred = !draft.list[action.payload.id].starred;
                break;
            default:
                return draft;
        }
    });
