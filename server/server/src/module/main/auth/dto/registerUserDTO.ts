import { IsEmail, IsOptional, IsString } from 'class-validator';

export class registerUserDTO {
  @IsOptional()
  @IsString()
    id: string;

  @IsString()
    login: string;

  @IsString()
    firstname: string;

  @IsString()
  @IsEmail()
    email: string;

  @IsString()
    password: string;
}
