import axios from 'axios';

import { initAPI } from './api.helpers';

describe('API Helpers', () => {
    test('initAPI returns defaults when no config passed', () => {
        initAPI();
        expect(axios.defaults.baseURL).toBe('http://localhost:3333');
        expect(axios.defaults.timeout).toBe(0);
    });
});
