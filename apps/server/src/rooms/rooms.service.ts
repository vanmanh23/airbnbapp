import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';
import { Category } from '../../src/category/category.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(
    private prisma: PrismaService,
  ) {}
  getAll() {
    return this.prisma.room.findMany();
  }
  getRoomById(id: string) {
    try {
      return this.prisma.room.findFirst({ where: { id } });
    } catch (error) {
      throw new Error(error.toString());
    }
  }
  getRoomandImages(id: string) {
    return this.prisma.room.findUnique({
      where: { id },
      include: { images: true },
      // relations: ['images'],
    });
  }
  create(rooms: RoomDto) {
    try {
      return this.prisma.room.create({
        data: {
          name: rooms.name,
          price: rooms.price,
          date: new Date(rooms.date),
          distance: rooms.distance,
          category: {
            connect: { id: rooms.categoryId },
          },
        },
      });
    } catch (error) {
      throw new Error(error.toString());
    }
  }
  getAllRoomsWithDetail() {
    return this.prisma.room.findMany({
      include: { images: true, category: true },
      // relations: ['images', 'category'],
    });
  }
  deleteRoom(id: string) {
    return this.prisma.room.delete({ where: { id }, include: { images: true } });
  }
  updateRoom(id: string, data: RoomDto) {
    const room = this.prisma.room.findUnique({ where: { id } });
    if (!room) {
      throw new Error('Room not found');
    }    
    return this.prisma.room.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        date: new Date(data.date),
        distance: data.distance,
        category: {
          connect: { id: data.categoryId },
        },
      },
    });
  }
}
