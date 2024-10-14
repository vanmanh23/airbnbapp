import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Repository } from 'typeorm';
import { Rooms } from 'src/rooms/rooms.entity';

@Injectable()
export class RoomImagesService {
  constructor(
    @InjectRepository(RoomImage)
    private roomImagesRepository: Repository<RoomImage>,
    @InjectRepository(Rooms)
    private roomRepository: Repository<Rooms>,
  ) {}

  async findAll(): Promise<RoomImage[]> {
    return this.roomImagesRepository.find();
  }
  async create(imageUrls: string[], roomId: string): Promise<void> {
    const room = await this.roomRepository.findOne({ where: { id: roomId } });
    if (!room) {
      throw new Error('Room not found');
    }
    const roomImages = imageUrls.map((url) => {
      return { imageUrl: url, room: room };
    });
    // console.log('roomImages: ', roomImages);
    await this.roomImagesRepository.save(roomImages);
    // return this.roomImagesRepository.save({ ...RoomImage, roomId });
  }
  // async create(imageUrls: string[], roomId: number): Promise<void> {
  //   const room = await this.roomRepository.findOne({ where: { id: roomId } });
  //   if (!room) {
  //     throw new Error('Room not found');
  //   }
  //   const roomImages = imageUrls.map((url) => {
  //     return { imageUrl: url, room: room };
  //   });
  //   // console.log('roomImages: ', roomImages);
  //   await this.roomImagesRepository.save(roomImages);
  //   // return this.roomImagesRepository.save({ ...RoomImage, roomId });
  // }
}
