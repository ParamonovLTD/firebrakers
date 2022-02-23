import {
  Body,
  Controller, Get,
  HttpCode,
  HttpStatus,
  Post, Req, Res,
  UseGuards,
} from '@nestjs/common';

import { Public, GetCurrentUserId, GetCurrentUser } from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthService } from './auth.service';
import { AuthDto, RegDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signupLocal(
    @Body() dto: RegDto
  ) {
    const userData = await this.authService.signupLocal(dto);

    return userData
  }

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signinLocal(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response,
  ) {
    const userData = await this.authService.signinLocal(dto);
    response.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

    return userData
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(
    @Req() req,
    @Res() res,
    ) {
    const { refreshToken } = req.cookies
    const token = await this.authService.logout(refreshToken)

    res.clearCookie('refreshToken')

    return res.status(HttpStatus.OK).json(token);
  }

  // @Public()
  @Get('users')
  getAll() {
    return this.authService.getAll()
  }
}
