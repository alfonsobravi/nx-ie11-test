export interface Patient {
    id: number;
    name: string;
    dob: string;
    email: string;
    phone: string;
    starred?: boolean;
}

export interface PatientState {
    list: Patient[];
}
