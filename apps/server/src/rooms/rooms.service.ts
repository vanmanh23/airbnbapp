import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';

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
  getRoomandImages(id: number) {
    return this.roomsRepository.findOne({
      where: { id },
      relations: ['images'],
    });
  }
  async create(rooms: RoomDto, categoryId: number): Promise<RoomDto> {
    try {
      const newRoom = this.roomsRepository.create(rooms);
      return await this.roomsRepository.save({ ...newRoom, categoryId });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllRoomsWithDetail(): Promise<Rooms[]> {
    return await this.roomsRepository.find({
      relations: ['images', 'category'],
    });
  }
}
