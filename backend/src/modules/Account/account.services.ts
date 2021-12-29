import { hashSync } from 'bcryptjs';
import buildError from '../../utils/error.helper';
import { Account } from '../../entities/Account';
import { getCustomRepository, UpdateResult } from 'typeorm';
import {
  AccountRequest,
  UpdateAccountRequest,
} from './account.interfaces';
import { AccountRepository } from './account.repository';

export const getOneAccountService = async (
  data: AccountRequest
): Promise<Account> => {
  const accountRepo = getCustomRepository(AccountRepository);
  const account = await accountRepo.getOneAccount(data);
  if (!account) throw buildError(400, 'Account not found');
  return account;
};


export const updateAccountService = async (
  data: UpdateAccountRequest,
): Promise<UpdateResult> => {
  const accountRepo = getCustomRepository(AccountRepository);
  const updated: UpdateResult = await accountRepo.updateAccount(data);
  if (!updated?.affected) throw buildError(400, 'Account not updated');
  return updated;
};
