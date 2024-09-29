import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  isEmailVerified: boolean = false;
}

export class LoginUserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
