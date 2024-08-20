import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module'; // Module CRUD của bạn

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
  ],
})
export class AppModule {}
