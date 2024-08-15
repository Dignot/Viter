import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Headers,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/module/main/auth/auth.service';
import { authUserDTO } from './dto/authUserDTO';
import { registerUserDTO } from './dto/registerUserDTO';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private Auth: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async authUser(
    @Body() dto: authUserDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.Auth.authUser(dto)
      .then((token) => {
        response.cookie('key', token.token, {
          httpOnly: false,
          secure: false,
        });
        response.cookie('ReFkey', token.refToken, {
          httpOnly: false,
          secure: false,
        });
        response.send(token);
      })
      .catch((e) =>
        response.status(HttpStatus.UNAUTHORIZED).send({
          message: e.message,
        }),
      );
  }

  @Post('register')
  async registerUsers(@Body() dto: registerUserDTO) {
    return this.Auth.registerUser(dto);
  }

  @Get('get')
  async getuser(@Headers('Cookie') token: string) {
    const tokens = token.split(/=|;/);
    console.log(tokens[1]);
    const payload = await this.jwtService.verifyAsync(tokens[1], {
      secret: process.env.SECRET,
    });
    return this.Auth.getUser(payload.id);
  }
  @Get('ref')
  async auth(
    @Headers('Cookie') token: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const tokens = token.split(/=|;/);
    const payload = await this.jwtService.verifyAsync(tokens[1], {
      secret: process.env.SECRET,
    });
    await this.Auth.ref(payload).then((token) => {
      response.cookie('key', token, {
        httpOnly: false,
        secure: false,
      });
    });
  }
}
