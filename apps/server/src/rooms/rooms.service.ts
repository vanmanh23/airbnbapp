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
    // @InjectRepository(Rooms)
    // private readonly roomsRepository: Repository<Rooms>,
    // @InjectRepository(Category)
    // private readonly categoryRepository: Repository<Category>,
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
      // const newRoom = this.prisma.room.create({
      return this.prisma.room.create({
        data: {
          name: rooms.name,
          price: rooms.price,
          date: rooms.date,
          distance: rooms.distance,
          category: {
            connect: { id: rooms.categoryId },
          },
          // category: { id: rooms.categoryId }
        },
        // include: { category: true },
      });
      // const savedRoom = this.prisma.room.create({ data: newRoom });
      // const savedRoom = this.prisma.room.findUnique({
      //   where: { id: newRoom.id },
      //   include: { category: true },
      // });
      // return {
      // id: savedRoom.id,
      // name: savedRoom.name,
      // price: savedRoom.price,
      // date: savedRoom.date,
      // distance: savedRoom.distance,
      // categoryId: savedRoom.category.id,
      //   id: newRoom.id,
      //   name: newRoom.name,
      //   price: newRoom.price,
      //   date: newRoom.date,
      //   distance: newRoom.distance,
      //   categoryId: newRoom.category.id,
      // };
    } catch (error) {
      throw new Error(error.toString());
    }
  }
  // async create(rooms: RoomDto, categoryId: number): Promise<RoomDto> {
  //   try {
  //     const newRoom = this.roomsRepository.create(rooms);
  //     return await this.roomsRepository.save({ ...newRoom, categoryId });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
  getAllRoomsWithDetail() {
    return this.prisma.room.findFirst({
      include: { images: true, category: true },
      // relations: ['images', 'category'],
    });
  }
}
