import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomImagesService } from './room-images.service';
import { RoomImage } from './room-images.entity';

@Controller('room-images')
export class RoomImagesController {
  constructor(private roomImagesService: RoomImagesService) {}

  @Get()
  async findAll() {
    return this.roomImagesService.findAll();
  }
  @Post('/newimage/:id')
  async create(
    @Body('imageUrls') imageUrls: string[],
    @Param('id') id: string,
  ) {
    await this.roomImagesService.create(imageUrls, id);
  }
}
