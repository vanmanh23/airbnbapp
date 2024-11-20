import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomImage } from './room-images.entity';
import { Repository } from 'typeorm';
import { Rooms } from '../../src/rooms/rooms.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomImageDto } from './dto/image.dto';

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
  async create(imageUrls: string[], roomId: string) {
    const room = this.prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      throw new Error('Room not found');
    }
    const roomImages = imageUrls.map((url) => ({
      imageUrl: url,
      roomId: roomId,
    }));
    await this.prisma.roomImage.createMany({ data: roomImages });
    return {
      status: HttpStatus.CREATED,
      message: 'Room images created successfully.',
    };
  }
  async update(roomId: string, imageUrls: string[]) {
    if (!Array.isArray(imageUrls)) {
      throw new Error('Invalid input: data must be an array of strings.');
    }
  
    // Map image URLs to the appropriate format
    const roomImages = imageUrls.map((url) => ({ roomId, imageUrl: url }));
  
    // Use a transaction to delete old images and add new ones
    return await this.prisma.$transaction([
      // Delete existing images for the room
      this.prisma.roomImage.deleteMany({
        where: { roomId },
      }),
      // Insert new images
      this.prisma.roomImage.createMany({
        data: roomImages,
      }),
    ]);
  }
  
}
