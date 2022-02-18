export type Roles = 'admin'  | 'student';

export interface User {
  name: string;
  email: string;
  id: string;
  role: Roles;
}


export interface IRegisterResponse {
  user: User;
}

export interface IAuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
