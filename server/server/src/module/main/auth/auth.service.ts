import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/type/user.model';
import { UserRepository } from 'src/repositories/user';
import { authUserDTO } from 'src/module/main/auth/dto/authUserDTO';
import { TokenService } from 'src/shared/token/token.service';
import { UserJWT } from 'src/shared/type/userJWT';

@Injectable()
export class AuthService {
  constructor(
    private _userRepository: UserRepository,
    private _tokenServis: TokenService,
  ) {}

  async registerUser(dto: User) {
    try {
      return await this._userRepository.createUser(dto);
    } catch (e) {
      return `Error ${e.status}:${e.message}`;
    }
  }

  async authUser(data: authUserDTO) {
    const { password } = data;
    const user = await this._userRepository.authUser(data);
    const { id } = user;
    const tokenData: UserJWT = {
      id,
      password,
    };

    const token = this._tokenServis.generateJwtToken(tokenData);

    return token;
  }
}
