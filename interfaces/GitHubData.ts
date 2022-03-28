export interface IRepository {
    name: string;
    description: string;
    observers: number;
    colorOfMainLanguage: string;
    mainLanguage: string;
    lastUpdate: string;
}

export interface IUser {
    name: string;
    userName: string;
    avatarUrl: string;
    description: string;
    place: string;
}