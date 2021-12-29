export type Roles = 'admin'  | 'user';

export interface User {
  sellerApprovedAt: string;
  createdAt: string;
  deletedAt: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: number;
  image: string;
  isActive: boolean;
  language: string;
  lastName: string;
  phone: string;
  phoneConfirmed: boolean;
  role: Roles;
  thumb: string;
  updatedAt: string;
}

export interface ICheckAuthResponse {
  statusCode: number | string;
  error: string;
  message: string;
  user: User;
}

export interface IAuthResponse {
  statusCode: number | string;
  error?: string;
  message: string;
  authToken: string;
  refreshToken: string;
}
