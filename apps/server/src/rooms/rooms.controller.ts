import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Rooms } from './rooms.entity';
import { RoomDto } from './dto/room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getAll(){
    return this.roomsService.getAll();
  }
  @Get('room/:id')
  getRoomById(@Param() params) {
    return this.roomsService.getRoomandImages(params.id);
  }
  @Post('/category/newroom')
  async create(@Body() room: RoomDto) {
    return await this.roomsService.create(room);
  }
  @Get('/all')
  async getAllRooms() {
    return this.roomsService.getAllRoomsWithDetail();
  }
}
