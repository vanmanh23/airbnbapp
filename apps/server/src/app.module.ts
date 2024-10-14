import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module'; // Module CRUD của bạn
import { CategoryModule } from './category/category.module';
import { RoomImagesModule } from './room-images/room-images.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { User } from './users/users.entity';
import { Rooms } from './rooms/rooms.entity';
import { ConfigModule } from '@nestjs/config';
import { UserMiddleWare } from './middleware/user.middleware';

// @UseFilters(HttpExceptionFilter)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Manh2003@',
      database: 'airbnb_db',
      autoLoadEntities: true,
      synchronize: true, // Đồng bộ tự động các thay đổi lên database
      entities: [User, Rooms],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ItemModule,
    CategoryModule,
    RoomsModule,
    RoomImagesModule,
    UsersModule,
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
