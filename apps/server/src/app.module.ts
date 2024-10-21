import 'dotenv/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
// import * as Joi from '@hapi/joi';

import { ItemModule } from './item/item.module'; // Module CRUD của bạn
import { CategoryModule } from './category/category.module';
import { RoomImagesModule } from './room-images/room-images.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
// import { User } from './users/users.entity';
// import { Rooms } from './rooms/rooms.entity';
import { ConfigModule } from '@nestjs/config';
import { UserMiddleWare } from './middleware/user.middleware';
// import { Category } from './category/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
// import databaseConfig from './config/database.config';

// @UseFilters(HttpExceptionFilter)
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'Manh2003@',
    //   database: 'airbnb_db',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // Chỉ định kiểu database là MySQL
      url: process.env.DATABASE_URL, // Lấy URL từ biến môi trường
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Đường dẫn tới các entity
      synchronize: true, // Tự động đồng bộ hóa database (không nên dùng trong production)
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mysql',
    //     url: configService.get<string>('DATABASE_URL'),
    //     autoLoadEntities: true, // Tự động tải các entity
    //     entities: [User, Rooms, Category],
    //     synchronize: true, // Không nên dùng trong production
    //   }),
    // }),
    ItemModule,
    CategoryModule,
    RoomsModule,
    RoomImagesModule,
    UsersModule,
    AuthModule,
  ],
  providers: [AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleWare) // Đăng ký middleware
      .forRoutes(UsersModule);
  }
}
