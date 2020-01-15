import React from 'react';
// import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules-react';

import { getPatientModule } from '@nx-ie11-test/domains';

export const Patientx: React.FC = () => {
    const patientsList = []; //useSelector(getAllPatients) || [];
    return (
        <DynamicModuleLoader modules={[getPatientModule()]}>
            <h3>
                Dynamic module loader
            </h3>
            <pre>Patients: {JSON.stringify(patientsList, null, 2)}</pre>
        </DynamicModuleLoader>
    );
};

export default Patientx;
