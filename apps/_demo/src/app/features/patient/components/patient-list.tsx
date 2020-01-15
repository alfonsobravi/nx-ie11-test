import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Flex } from 'reakit';
import {
    ActionWithPayload, getAllPatients, Patient, PatientActions, PatientActionTypes
} from '@nx-ie11-test/domains';

// import { Pane, Text } from '@nx-ie11-test/ui-core';

export const PatientList: React.FunctionComponent = (): ReactElement => {
    const patientsList = useSelector(getAllPatients);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {patientsList.length === 0 ? (
                <p>No results found.</p>
            ) : (
                patientsList.map((p: Patient, idx: number) => (
                    <div
                        key={p.id}
                        onClick={(): ActionWithPayload<PatientActionTypes.ToggleStar, any> =>
                            dispatch(PatientActions.toggleStar(p.id))
                        }
                    >
                            <p>{p.name}</p>
                            <p>{p.starred ? '💖' : '🖤'}</p>
                    </div>
                ))
            )}
        </React.Fragment>
    );
};
