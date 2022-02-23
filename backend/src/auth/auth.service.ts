import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import * as bcrypt from 'bcrypt';

import { AuthDto, RegDto } from './dto';
import { JwtPayload, Tokens } from './types';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/schemas/user.schema';
import { Token, TokenDocument } from '../token/schemas/token.schema';
import { UserRoles } from '../types/user';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signupLocal(dto: RegDto) {
    const candidate = await this.userModel.findOne({email: dto.email})
    if (candidate) {
      throw new Error('Пользователь с таким email уже существует!')
    }

    const hashPassword = await bcrypt.hash(dto.password, 3);
    const user = await this.userModel.create({...dto, password:hashPassword, role: UserRoles.STUDENT})

    return user;
  }

  async signinLocal(dto: AuthDto) {
    const user = await this.userModel.findOne({email: dto.email})
    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refreshToken);

    return {
      ...tokens,
      user
    };
  }

  async logout(refreshToken: string) {
    const token = await this.tokenModel.deleteOne({refreshToken})

    return token;
  }

  async updateRtHash(userId: number, rt: string) {
    const tokenData = await this.tokenModel.findOne({user: userId})
    if (tokenData) {
      tokenData.refreshToken = rt
      return tokenData.save()
    }

    const token = await this.tokenModel.create({user: userId, refreshToken: rt})
    return token
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: '360d',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: '360d',
      }),
    ]);

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }



  async getAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }
}
