import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomImagesService } from './room-images.service';
import { RoomImage } from './room-images.entity';
import { RoomImageDto } from './dto/image.dto';

@Controller('room-images')
export class RoomImagesController {
  constructor(private roomImagesService: RoomImagesService) {}

  @Get()
  findAll() {
    return this.roomImagesService.findAll();
  }
  @Post('/newimage/:roomid')
  async create(
    @Body('imageUrls') imageUrls: string[],
    @Param('roomid') roomid: string,
  ) {
    await this.roomImagesService.create(imageUrls, roomid);
  }

  @Post('/update/:roomid')
  updateImages(@Param('roomid') roomid: string, @Body('imageUrls') imageUrls: string[]) {
    return this.roomImagesService.update(roomid, imageUrls);
  }
}
