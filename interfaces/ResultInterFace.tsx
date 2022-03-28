export interface Repository {
    name: string;
    description: string;
    observers: number;
    colorOfMainLanguage: string;
    mainLanguage: string;
    lastUpdate: string;
}

export interface User {
    name: string;
    avatarUrl: string;
    description: string;
    place: string;
}