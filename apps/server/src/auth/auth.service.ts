import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private configService: ConfigService,
  ) {}

  async register(requestBody: CreateUserDto) {
    //check the email is exist
    const userByEmail = await this.userService.findByEmail(requestBody.email);
    if (userByEmail) {
      throw new Error('Email already exists');
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);
    requestBody.password = hashedPassword;
    //save the user to db
    const saveUser = await this.userService.createUser(requestBody);
    //generate jwt token
    const payload = {
      id: saveUser.id,
      firstName: saveUser.firstName,
      lastName: saveUser.lastName,
    };
    const access_tocken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
    });
    return {
      msg: `User has been created`,
      access_tocken,
    };
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(requestBody: LoginUserDto) {
    const user = await this.userService.findByEmail(requestBody.email);
    //check if user exist
    if (!user) {
      throw new Error('User not found');
    }
    //check if password is correct
    const isPasswordMatch = await bcrypt.compare(
      requestBody.password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new Error('Password is incorrect');
    }
    //generate jwt token
    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    const access_tocken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
    });
    return {
      msg: `User has been logged in`,
      access_tocken,
    };
  }
}
