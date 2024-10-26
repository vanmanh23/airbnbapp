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
import { TransformInterceptor } from '../../src/interceptors/transform.interceptor';
import { Roles } from '../../src/auth/roles.decorator';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
@UseInterceptors(TransformInterceptor)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
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
    return this.authService.register(requestBody);
  }
  @Post('/login')
  async LoginUser(@Body() requestBody: LoginUserDto) {
    return this.authService.login(requestBody);
  }
  @Post('/create/admin')
  @Roles('admin')
  create(@Body() reques: CreateUserDto) {
    return this.userService.createUser(reques);
  }
  @Get('/auth/verify')
  async verifyEmail(@Query('token') token: string) {
    return this.authService.verifyEmail(token);
  }
  @Get('/auth/verify/:token')
  async verifyToken(@Param('token') token: string) {
    return this.authService.verifyToken(token);
  }
}
