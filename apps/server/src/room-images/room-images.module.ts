import { Module } from '@nestjs/common';
import { RoomImagesController } from './room-images.controller';
import { RoomImagesService } from './room-images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Rooms } from '../../src/rooms/rooms.entity';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  // imports: [TypeOrmModule.forFeature([RoomImage, Rooms])],
  imports: [PrismaModule],
  controllers: [RoomImagesController],
  providers: [RoomImagesService],
})
export class RoomImagesModule {}
