import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Repository } from 'typeorm';
import { Rooms } from '../../src/rooms/rooms.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomImagesService {
  constructor(
    private prisma: PrismaService,
    // @InjectRepository(RoomImage)
    // private roomImagesRepository: Repository<RoomImage>,
    // @InjectRepository(Rooms)
    // private roomRepository: Repository<Rooms>,
  ) {}

  findAll() {
    return this.prisma.roomImage.findMany();
  }
  create(imageUrls: string[], roomId: string) {
    const room = this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      throw new Error('Room not found');
    }
    const roomImages = imageUrls.map((url) => {
      return { imageUrl: url, room: room };
    });
    this.prisma.roomImage.createMany({ data: roomImages });
  }
}
