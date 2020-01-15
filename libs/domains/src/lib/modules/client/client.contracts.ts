export interface ClientSummary {
    clientID?: number;
    clientNumber: string;
    minDateOfBirth?: string;
    maxDateOfBirth?: string;
    dateOfDeath?: string;
    furtherGivenNames: string;
    genderDescription: string;
    givenName: string;
    namePrefix: string;
    nhiNumber: string;
    owningNascName: string;
    surname: string;
    addressLine1: string;
    organisationCode: string;
    isPrimaryLinkedClient: boolean;
    isSecondaryLinkedClient: boolean;
    isActive: boolean;
    displayName: string;
    fundingStreamCode: string;
    frequentChangeInSupport?: boolean;
    needsAssessorName: string;
    serviceCoordinatorName: string;
}

export type ClientSummaryList = ClientSummary[];

export interface ClientSummaryListFilters {
    searchAgainstPreferredNameOnly?: boolean;
    dateOfBirthLowerBound?: string;
    dateOfBirthUpperBound?: string;
    pageSize?: number;
    pageNumber?: number;
    clientSurname?: string;
    clientFirstName?: string;
    NHINumber?: string;
    NASCID?: number | string;
    LACSupportLevel?: number;
    LACCoordinatorEmployeeID?: number;
}

export interface ClientState {
    summaryList: ClientSummaryList;
    summaryListFilters: Partial<ClientSummaryListFilters>;
}
