import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module'; // Module CRUD của bạn
import { CategoryModule } from './category/category.module';
import { RoomImagesModule } from './room-images/room-images.module';
import { RoomsModule } from './rooms/rooms.module';

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
    }),
    ItemModule,
    CategoryModule,
    RoomsModule,
    RoomImagesModule,
  ],
})
export class AppModule {}
