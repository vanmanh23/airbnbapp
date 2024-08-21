import { Controller, Get } from '@nestjs/common';
import { RoomImagesService } from './room-images.service';
import { RoomImage } from './room-images.entity';

@Controller('room-images')
export class RoomImagesController {
  constructor(private roomImagesService: RoomImagesService) {}

  @Get()
  async findAll(): Promise<RoomImage[]> {
    return this.roomImagesService.findAll();
  }
}
