import { IsString } from 'class-validator';

export class authUserDTO {
  @IsString()
    login: string;

  @IsString()
    password: string;
}
