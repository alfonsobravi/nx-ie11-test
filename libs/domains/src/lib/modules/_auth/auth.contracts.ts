export interface UserCredentials {
    email: string;
    password: string;
}

export interface UserProfile {
    id: number;
    name: string;
}

export interface AuthResponse {
    accessToken: string | null;
}

export interface AuthState extends AuthResponse {
    user?: UserProfile;
}
