import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Rooms) private roomsRepository: Repository<Rooms>,
  ) {}
  async getAll(): Promise<Rooms[]> {
    return await this.roomsRepository.find();
  }
  async getRoomById(id: number): Promise<Rooms> {
    try {
      return await this.roomsRepository.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
