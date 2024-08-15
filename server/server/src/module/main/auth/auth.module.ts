import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from 'src/repositories/user';
import { TokenModule } from 'src/shared/token/token.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TokenModule],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtService],
})
export class AuthModule {}
