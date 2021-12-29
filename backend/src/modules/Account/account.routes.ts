import bcrypt from 'bcryptjs';

import { genRandomPassword } from './../../utils/utils';
import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { Account, Roles, roles } from '../../entities/Account';
import { allowedFor, checkAuthHook } from '../Auth/auth.utils';
import {
  CommonResponse,
} from './account.interfaces';

import {
  getOneAccountService,
} from './account.services';
import buildError from '../../utils/error.helper';

// eslint-disable-next-line @typescript-eslint/require-await
const routes = async (fastify: FastifyInstance): Promise<void> => {
  const commonResponse = {
    statusCode: 200,
    message: 'Success',
  };
  const nothingToDeleteResponse = {
    statusCode: 200,
    message: 'Nothing to delete',
  };

  const getOneAccountController = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<any> => {
    try {
      const account = request.user as Account;
      const extendedAccount = await getOneAccountService({
        accountId: account.id,
      });
      return {
        ...commonResponse,
        account: extendedAccount,
      };
    } catch (error) {
      console.log('get one account error', error.message);
      throw error;
    }
  };

  fastify.get('/user', {
    preHandler: checkAuthHook(fastify.jwt),
  }, getOneAccountController);
};

export default routes;
