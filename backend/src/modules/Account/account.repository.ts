import {
  UpdatePasswordRepositoryData,
  UpdateAccountRequest,
} from './account.interfaces';
import {
  Account,
  roles as accountRoles
} from '../../entities/Account';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
  In
} from 'typeorm';
import bcrypt from 'bcryptjs';
import { REQUESTS_LIMIT, REQUESTS_OFFSET } from './account.constants';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {
  all() {
    return this.createQueryBuilder('Account')
      .select('Account')
      .getMany();
  }
  getOneAccount(data: any) {
    const { accountId } = data;
    return this.createQueryBuilder('account')
      .select(['account.id', 'account.firstName', 'account.lastName', 'account.phone', 'account.email', 'account.role', 'account.language',
        'account.emailConfirmed', 'account.phoneConfirmed', 'account.createdAt', 'account.updatedAt'])
      .where('account.id = :accountId', { accountId })
      .getOne();
  }

  updatePassword({ account, password }: UpdatePasswordRepositoryData) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    account.password = passwordHash;
    return this.save(account);
  }

  updateAccount(data: UpdateAccountRequest) {
    const { accountId, ...other } = data;
    return this.update({
      id: accountId,
    }, other);
  }
}
