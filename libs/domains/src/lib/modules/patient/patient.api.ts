import axios, { AxiosResponse } from 'axios';

import { Patient } from './patient.contracts';

export const loadList = (): any => {
    return axios
        .get('/patients?_start=0&_end=20')
        .then((response: AxiosResponse<Patient[]>) => response)
        .catch(error => ({ error }));
};
