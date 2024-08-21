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
}

// @Injectable()
// export class CategoryService {
//   constructor(
//     @InjectRepository(Category)
//     private categoryRepository: Repository<Category>,
//   ) {}

//   async getAll(): Promise<Category[]> {
//     return await this.categoryRepository.find();
//   }
//   async getByTitle(title: string): Promise<Category> {
//     return await this.categoryRepository.findOneBy({ title });
//   }
// }
