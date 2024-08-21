import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
  async getByTitle(title: string): Promise<Category> {
    return await this.categoryRepository.findOneBy({ title });
  }
}
