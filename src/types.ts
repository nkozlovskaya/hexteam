export interface IUser {
  loggedIn: boolean;
  access_token: string;
}

export interface ILink {
  id: number;
  short: string;
  target: string;
  counter: number;
}
