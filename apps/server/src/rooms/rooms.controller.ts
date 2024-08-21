import { Controller, Get } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Rooms } from './rooms.entity';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  async getAll(): Promise<Rooms[]> {
    return await this.roomsService.getAll();
  }
}
