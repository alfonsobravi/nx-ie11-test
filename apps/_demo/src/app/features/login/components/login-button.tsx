import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import {
    ActionWithPayload, authActions, AuthActionTypes, AuthSelectors
} from '@nx-ie11-test/domains';

// import { Link } from '@nx-ie11-test/ui-core';

export const LoginButton: React.FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthenticated = useSelector(AuthSelectors.isAuthenticated);

    return !isAuthenticated ? (
        <RouterLink to="/login">Login</RouterLink>
    ) : (
        <span
            onClick={(): ActionWithPayload<AuthActionTypes.LogoutUser, any> =>
                dispatch(authActions.unsetUserToken(history))
            }
        >
            Logout
        </span>
    );
};
