import { Module } from '@nestjs/common';
import { AuthModule } from './module/main/auth/auth.module';
import { TokenModule } from './shared/token/token.module';

@Module({
  imports: [AuthModule, TokenModule],
})
export class AppModule {}
