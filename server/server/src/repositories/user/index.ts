import { Injectable } from '@nestjs/common';
import { getHashPassword } from 'src/shared/utils';
import { User } from 'src/shared/type/user.model';
import * as bcrypt from 'bcrypt';
import { UserExists } from 'src/shared/exceptions/errorHandlers/userExists';
import { authUserDTO } from 'src/module/main/auth/dto/authUserDTO';

@Injectable()
export class UserRepository {
  constructor() {}
  private Users: User[] = [];

  async createUser(data: User) {
    data.password = await getHashPassword(data.password);

    const id = this.Users.length;

    const newUser = {
      id: id,
      ...data,
    };

    this.Users.push(newUser);
    return;
  }

  async authUser(data: authUserDTO) {
    const { login, password } = data;
    const user = this.Users.find((el) => el.login === login);
    if (!user) {
      throw new UserExists('user not found');
    }
    const validatePassword = await bcrypt.compare(password, user.password);

    if (validatePassword) {
    } else {
      throw new UserExists('user not found');
    }
    return user;
  }
}
