import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';

import { getPatientModule } from '@nx-ie11-test/domains';

import { PatientList } from '../components';

export const Landing: React.FC = () => {
    return (
        <DynamicModuleLoader modules={[getPatientModule()]}>
            <h3>
                Patients landing page
            </h3>
            <PatientList />
        </DynamicModuleLoader>
    );
};

export default Landing;
