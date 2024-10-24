import 'dotenv/config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { CategoryModule } from './category/category.module';
import { RoomImagesModule } from './room-images/room-images.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserMiddleWare } from './middleware/user.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('DATABASE_URL'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        // logging: true,
        // connectTimeout: 30000,
        // type: 'mysql',
        // host: configService.get<string>('DATABASE_HOST'),
        // port: 3306,
        // username: configService.get<string>('DATABASE_USERNAME'),
        // password: configService.get<string>('DATABASE_PASSWORD'),
        // database: configService.get<string>('DATABASE_NAME'),
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // synchronize: true,
        // 
        // extra: {
        //   connectionLimit: 10, // Max number of connections in the pool
        //   queueLimit: 0, // Unlimited queued requests
        //   waitForConnections: true, // Wait if all connections are in use
        //   connectTimeout: 10000,
        // },
      }),
    }),
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
    consumer.apply(UserMiddleWare).forRoutes(UsersModule);
  }
}
