export interface UserLoginInterface {
  email: string;
  password: string;
}

export interface LoginRequestInterface {
  user: UserLoginInterface;
}
