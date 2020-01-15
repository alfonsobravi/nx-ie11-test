import { ClientSummary, ClientSummaryList, ClientSummaryListFilters } from './client.contracts';

export const getClientSummaryList = (state: any): ClientSummaryList => {
    return state.client.summaryList || [];
};

export const getClientSummaryListFilters = (state: any): ClientSummaryListFilters => {
    return state.client.summaryListFilters || {};
};

export const getClientSummary = (state: any, clientID: number | string): ClientSummary => {
    return getClientSummaryList(state).find(c => c.clientID.toString() === clientID);
};
