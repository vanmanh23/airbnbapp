import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomImagesService } from './room-images.service';
import { RoomImage } from './room-images.entity';

@Controller('room-images')
export class RoomImagesController {
  constructor(private roomImagesService: RoomImagesService) {}

  @Get()
  async findAll(): Promise<RoomImage[]> {
    return this.roomImagesService.findAll();
  }
  @Post('/newimage/:id')
  async create(
    @Body('imageUrls') imageUrls: string[],
    @Param('id') id: string,
  ): Promise<void> {
    await this.roomImagesService.create(imageUrls, id);
  }
}
