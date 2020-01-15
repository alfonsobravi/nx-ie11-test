import { Action, ActionsUnion, ActionWithPayload, createAction } from '../../utils/action.helpers';
import { ClientSummaryList, ClientSummaryListFilters } from './client.contracts';

/**
 * Action Types
 */
export enum ClientActionTypes {
    SetClientSummaryList = 'client/setClientSummaryList',
    ClearClientSummaryList = 'client/clearClientSummaryList',
    SetClientSummaryListFilters = 'client/setClientSummaryListFilters',
    ClearClientSummaryListFilters = 'client/clearClientSummaryListFilters'
}

/**
 * Actions
 */
export const ClientActions = {
    // populate summary list
    setClientSummaryList: (
        list: ClientSummaryList
    ): ActionWithPayload<ClientActionTypes.SetClientSummaryList, { list: ClientSummaryList }> =>
        createAction(ClientActionTypes.SetClientSummaryList, { list }),
    // clear summary list
    clearClientSummaryList: (): Action<ClientActionTypes.ClearClientSummaryList> =>
        createAction(ClientActionTypes.ClearClientSummaryList),
    // populate search filters
    SetClientSummaryListFilters: (
        filters: Partial<ClientSummaryListFilters>
    ): ActionWithPayload<
        ClientActionTypes.SetClientSummaryListFilters,
        { filters: Partial<ClientSummaryListFilters> }
    > => createAction(ClientActionTypes.SetClientSummaryListFilters, { filters }),
    // clear search filters
    clearClientSummaryListFilters: (): Action<ClientActionTypes.ClearClientSummaryListFilters> =>
        createAction(ClientActionTypes.ClearClientSummaryListFilters)
};

// we leverage TypeScript token merging, so our consumer can use `Actions` for both runtime and compile time types
export type ClientActionsUnion = ActionsUnion<typeof ClientActions>;
