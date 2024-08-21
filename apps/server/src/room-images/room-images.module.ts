import { Module } from '@nestjs/common';
import { RoomImagesController } from './room-images.controller';
import { RoomImagesService } from './room-images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomImage])],
  controllers: [RoomImagesController],
  providers: [RoomImagesService],
})
export class RoomImagesModule {}
