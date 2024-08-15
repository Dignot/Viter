import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/module/main/auth/auth.service';
import { authUserDTO } from './dto/authUserDTO';
import { registerUserDTO } from './dto/registerUserDTO';

@Controller('auth')
export class AuthController {
  constructor(private Auth: AuthService) {}

  @Post()
  async authUser(
    @Body() dto: authUserDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.Auth.authUser(dto)
      .then((token) => {
        response.cookie('key', token, {
          httpOnly: true,
          signed: true,
        });
        response.status(200).send('Зашел');
      })
      .catch((e) =>
        response.status(HttpStatus.FORBIDDEN).send({
          status: e.status,
          message: e.message,
        }),
      );
  }

  @Post('register')
  async registerUsers(@Body() dto: registerUserDTO) {
    return this.Auth.registerUser(dto);
  }
}
