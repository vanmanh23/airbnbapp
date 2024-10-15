import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';
import { Category } from '../../src/category/category.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Rooms)
    private readonly roomsRepository: Repository<Rooms>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getAll(): Promise<Rooms[]> {
    return await this.roomsRepository.find();
  }
  async getRoomById(id: string): Promise<Rooms> {
    try {
      return await this.roomsRepository.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
  // async getRoomById(id: number): Promise<Rooms> {
  //   try {
  //     return await this.roomsRepository.findOneBy({ id });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
  getRoomandImages(id: string) {
    return this.roomsRepository.findOne({
      where: { id },
      relations: ['images'],
    });
  }
  // getRoomandImages(id: number) {
  //   return this.roomsRepository.findOne({
  //     where: { id },
  //     relations: ['images'],
  //   });
  // }
  async create(rooms: RoomDto): Promise<RoomDto> {
    try {
      // const category = await this.categoryRepository.findOne({
      //   where: { id: rooms.categoryId },
      // });
      // if (!category) {
      //   throw new Error('Category not found');
      // }
      const newRoom = this.roomsRepository.create({
        name: rooms.name,
        price: rooms.price,
        date: rooms.date,
        distance: rooms.distance,
        category: { id: rooms.categoryId },
      });
      const savedRoom = await this.roomsRepository.save(newRoom);
      return {
        id: savedRoom.id,
        name: savedRoom.name,
        price: savedRoom.price,
        date: savedRoom.date,
        distance: savedRoom.distance,
        categoryId: savedRoom.category.id,
      };
      // return {
      //   id: rooms.id,
      //   name: rooms.name,
      //   price: rooms.price,
      //   date: rooms.date,
      //   distance: rooms.distance,
      //   categoryId: rooms.categoryId,
      // };
    } catch (error) {
      throw new Error(error);
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
  async getAllRoomsWithDetail(): Promise<Rooms[]> {
    return await this.roomsRepository.find({
      relations: ['images', 'category'],
    });
  }
}
