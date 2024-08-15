import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { UserJWT } from '../type/userJWT';

dotenv.config();

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  generateJwtToken(user: UserJWT) {
    return this.jwtService.sign(user, {
      secret: process.env.SECRET,
      expiresIn: `${process.env.EXPIRE_JWT}m`,
    });
  }
  generateRefreshJwtToken(user: UserJWT) {
    return this.jwtService.sign(user, {
      secret: process.env.REFSECRET,
      expiresIn: `${process.env.REFEXPIRE_JWT}d`,
    });
  }
}
