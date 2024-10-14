import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';

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

  async getById(id: string): Promise<Category> {
    try {
      return await this.categoryRepository.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }
  // async getById(id: number): Promise<Category> {
  //   try {
  //     return await this.categoryRepository.findOneBy({ id });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  async create(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  async update(
    oldCategory: Category,
    categoryupdate_value: CategoryDto,
  ): Promise<Category> {
    const updatecategory = oldCategory;
    Object.keys(categoryupdate_value).forEach((key) => {
      updatecategory[key] = categoryupdate_value[key];
    });
    try {
      return await this.categoryRepository.save(updatecategory);
    } catch (e) {
      throw new Error(e);
    }
  }

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
  // async remove(id: number): Promise<void> {
  //   await this.categoryRepository.delete(id);
  // }
  getAllRoomsOfCategory(id: string) {
    return this.categoryRepository.find({
      where: { id },
      relations: ['rooms'],
    });
  }
  // getAllRoomsOfCategory(id: number) {
  //   return this.categoryRepository.find({
  //     where: { id },
  //     relations: ['rooms'],
  //   });
  // }
}
