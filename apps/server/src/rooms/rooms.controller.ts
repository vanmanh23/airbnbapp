import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Rooms } from './rooms.entity';
import { RoomDto } from './dto/room.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  async getAll(): Promise<Rooms[]> {
    return await this.roomsService.getAll();
  }
  @Get('room/:id')
  getRoomById(@Param() params): Promise<any> {
    return this.roomsService.getRoomandImages(params.id);
  }
  @Post('/category/:id/newroom')
  async create(
    @Body() room: RoomDto,
    @Param('id') id: number,
  ): Promise<RoomDto> {
    return await this.roomsService.create(room, id);
  }
  @Get('/all')
  async getAllRooms(): Promise<Rooms[]> {
    return this.roomsService.getAllRoomsWithDetail();
  }
}
