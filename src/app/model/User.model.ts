export class User {
  email: string;
  password: string;
  conpassword: string;
}

export class CurrentUser {
  constructor(
    public userData: string,
    public isAuthorized: boolean,
    public token: string,
    public refreshToken: string,
    public expires_in: string
  ) { }
}
