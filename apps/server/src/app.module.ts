import 'dotenv/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { RoomImagesModule } from './room-images/room-images.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserMiddleWare } from './middleware/user.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TypeOrmConfigService } from './config/database';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [
    CategoryModule,
    RoomsModule,
    RoomImagesModule,
    UsersModule,
    AuthModule,
    PrismaModule,
  ],
  providers: [AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleWare).forRoutes(UsersModule);
  }
}
