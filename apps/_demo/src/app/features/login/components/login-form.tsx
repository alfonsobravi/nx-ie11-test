import { Field, Form, Formik } from 'formik';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { authActions, SystemSelectors } from '@nx-ie11-test/domains';

// import { Alert, Button, FieldSet, InputField } from '@nx-ie11-test/ui-core';

const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string().required('Required')
});

export const LoginForm: React.FunctionComponent = (): ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoading = useSelector(SystemSelectors.isLoading);
    const lastError = useSelector(SystemSelectors.lastError);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginValidationSchema}
            onSubmit={(values): void => {
                dispatch(authActions.validateUser(values, history));
            }}
        >
            <Form>
                <div>
                    {lastError && (
                        <p>
                            {lastError.message}
                        </p>
                    )}
                    <Field name="email" label="Email" />
                    <Field type="password" name="password" label="Password" />
                    <button
                        type="submit"
                        disabled={isLoading}
                    >
                        Login
                    </button>
                </div>
            </Form>
        </Formik>
    );
};
