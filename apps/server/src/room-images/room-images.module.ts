import { Module } from '@nestjs/common';
import { RoomImagesController } from './room-images.controller';
import { RoomImagesService } from './room-images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Rooms } from '../../src/rooms/rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomImage, Rooms])],
  controllers: [RoomImagesController],
  providers: [RoomImagesService],
})
export class RoomImagesModule {}
