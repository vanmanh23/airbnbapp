import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomImagesService {
  constructor(
    @InjectRepository(RoomImage)
    private roomImagesRepository: Repository<RoomImage>,
  ) {}

  async findAll(): Promise<RoomImage[]> {
    return this.roomImagesRepository.find();
  }
}
