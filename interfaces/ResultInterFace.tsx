export interface IRepository {
  name: string;

  description: string;
  stars: number;
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

export interface IUserPresentation {
  name: string;
  userName: string;
  avatarUrl: string;
  followers: number;
  following: number;
  stars: number;
}