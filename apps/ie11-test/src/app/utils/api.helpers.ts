import axios from 'axios';

export interface ApiConfiguration {
    baseURL?: string;
    timeout?: number;
}

const DEFAULTS = {
    baseURL: 'http://localhost:3333',
    timeout: 0
};

/**
 * Initializes API and Axios client defaults
 * Called automatically by @whanau/domain/index.ts
 * Can be callet at any point in time to provide overrides
 * @param customConfiguration
 */
export const initAPI = (customConfiguration?: ApiConfiguration): void => {
    // merge custom configuration with defaults
    const conf = {
        ...DEFAULTS,
        ...customConfiguration
    };
    // assign configuration to axios defaults
    axios.defaults.baseURL = conf.baseURL;
    axios.defaults.timeout = conf.timeout;
};

/**
 * Extends Axios client defaults to include a header entry with Bearer token
 * @param authToken
 */
export const setAuthHeaders = (authToken: string): void => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
};
