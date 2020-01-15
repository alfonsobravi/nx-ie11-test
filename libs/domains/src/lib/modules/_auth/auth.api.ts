import axios from 'axios';

import { UserCredentials } from './auth.contracts';

export const validateUser = (userCredentials: UserCredentials): any => {
    return axios.post('/login', userCredentials);
};
