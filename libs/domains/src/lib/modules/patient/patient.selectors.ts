import { Patient } from './patient.contracts';

export const getAllPatients = (state: any): Patient[] => {
    return state.patient.list || [];
};

// how about computed selectors, like sorting patients by starred status?
// .sort((a: Patient) => (a.starred ? -1 : 1));
