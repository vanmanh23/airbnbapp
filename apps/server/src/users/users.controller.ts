import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './dto/users.dto';
import { AuthService } from '../../src/auth/auth.service';
import { TransformInterceptor } from '../../src/interceptors/transform.interceptor';
import { Roles } from '../../src/auth/roles.decorator';

@Controller('users')
@UseInterceptors(TransformInterceptor)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authenservice: AuthService,
  ) {}

  @Get('')
  async getAll() {
    return this.userService.getAll();
  }
  @Get('/email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneById(id);
  }
  @Post('/register')
  async registerUser(@Body() requestBody: CreateUserDto) {
    return this.authenservice.register(requestBody);
  }
  @Post('/login')
  async LoginUser(@Body() requestBody: LoginUserDto) {
    return this.authenservice.login(requestBody);
  }
  @Post('/create/admin')
  @Roles('admin')
  create(@Body() reques: CreateUserDto) {
    return this.userService.createUser(reques);
  }
  @Get('/auth/verify')
  async verifyEmail(@Query('token') token: string) {
    return this.authenservice.verifyEmail(token);
  }
  @Get('/auth/verify/:token')
  async verifyToken(@Param('token') token: string) {
    return this.authenservice.verifyToken(token);
  }
}
