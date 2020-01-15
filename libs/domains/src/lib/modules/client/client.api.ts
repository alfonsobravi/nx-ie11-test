import axios, { AxiosResponse } from 'axios';

import { ClientSummaryList, ClientSummaryListFilters } from './client.contracts';

export const searchList = (filters: Partial<ClientSummaryListFilters>): any => {
    const queryString = [];
    if (filters.clientSurname) {
        queryString.push(`surname_like=${filters.clientSurname}`);
    }
    if (filters.clientFirstName) {
        queryString.push(`givenName_like=${filters.clientFirstName}`);
    }
    return axios
        .get(`/socrates-clients?${queryString.join('&')}`)
        .then((response: AxiosResponse<ClientSummaryList>) => response)
        .catch(error => ({ error }));
};

export const loadList = (): any => {
    return axios
        .get('/socrates-clients?_start=0&_end=20')
        .then((response: AxiosResponse<ClientSummaryList>) => response)
        .catch(error => ({ error }));
};
