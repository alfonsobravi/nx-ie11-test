import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

/* eslint-disable-next-line */
export interface FormxProps {}

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  password: Yup.string().required('Required')
});

export const Formx = (props: FormxProps) => {

  return (
    <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginValidationSchema}
            onSubmit={(values): void => {
                console.log('FORM VALUES', values);
            }}
        >
            <Form>
                <div>
                    <Field name="email" label="Email" />
                    <Field type="password" name="password" label="Password" />
                    <input type="submit" />
                </div>
            </Form>
        </Formik>
  );
};

export default Formx;
