export type Roles = 'admin'  | 'student';

export interface User {
  name: string;
  email: string;
  _id: string;
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

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}