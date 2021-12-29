import { Account } from '../../entities/Account';
import { Languages } from '../../entities/Account'

export interface CommonResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export interface AccountRequest {
  accountId: number | string;
}
export interface AccountRequestRepositoryData {
  accountId: number;
}
export interface UpdatePasswordRepositoryData {
  account: Account,
  password: string,
}
export interface UpdateAccountRequest {
  accountId: number,
  [n: string]: any,
}

