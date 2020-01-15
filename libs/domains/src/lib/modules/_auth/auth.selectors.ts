export const isAuthenticated = (state: any): boolean => {
    return state._auth ? !!state._auth.accessToken : false;
};

/**
 * Auth selectors object
 */
export const AuthSelectors = {
    isAuthenticated
};
