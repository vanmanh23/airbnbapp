import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  @Delete('/delete/:id')
  async deleRoom(@Param() params : { id: string }) {
    return this.roomsService.deleteRoom(params.id);
  }
  @Post('/update/:id')
  updateRoomWithImages( @Param('id') id: string, @Body() data: RoomDto) {
    return this.roomsService.updateRoom(id, data);
  }
}
