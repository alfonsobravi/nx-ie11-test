import { Action, ActionsUnion, ActionWithPayload, createAction } from '../../utils/action.helpers';
import { Patient } from './patient.contracts';

/**
 * Action Types
 */
export enum PatientActionTypes {
    LoadList = 'patient/loadList',
    SetList = 'patient/setList',
    ToggleStar = 'patient/toggleStar'
}

/**
 * Actions
 */
export const PatientActions = {
    loadList: (): Action<PatientActionTypes.LoadList> => createAction(PatientActionTypes.LoadList),
    setList: (list: Patient[]): ActionWithPayload<PatientActionTypes.SetList, { list: Patient[] }> =>
        createAction(PatientActionTypes.SetList, { list }),
    toggleStar: (id: number): ActionWithPayload<PatientActionTypes.ToggleStar, { id: number }> =>
        createAction(PatientActionTypes.ToggleStar, { id })
};

// we leverage TypeScript token merging, so our consumer can use `Actions` for both runtime and compile time types
export type PatientActionsUnion = ActionsUnion<typeof PatientActions>;
