import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { UserMiddleWare } from '../middleware/user.middleware';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [UsersService, AuthService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleWare).forRoutes(UsersController);
  }
}
