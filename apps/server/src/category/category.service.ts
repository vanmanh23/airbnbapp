import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Category } from './category.entity';
// import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService,
    // @InjectRepository(Category)
    // private categoryRepository: Repository<Category>,
  ) {}

  getAll() {
    return this.prisma.category.findMany();
  }
  getByTitle(title: string) {
    return this.prisma.category.findFirst({ where: { title } });
  }

  getById(id: string) {
    try {
      return this.prisma.category.findFirst({ where: { id } });
    } catch (error) {
      throw new Error(error.toString());
    }
  }

  create(category: CategoryDto) {
    return this.prisma.category.create({ data: category });
  }

  update(
    id: string,
    oldCategory: CategoryDto,
    categoryupdate_value: CategoryDto,
  ) {
    const updatecategory = oldCategory;
    Object.keys(categoryupdate_value).forEach((key) => {
      updatecategory[key] = categoryupdate_value[key];
    });
    try {
      return this.prisma.category.update({
        where: { id },
        data: updatecategory,
      });
    } catch (e) {
      throw new Error(e.toString());
    }
  }

  async remove(id: string){
    await this.prisma.category.delete({
      where: { id },});
  }
  getAllRoomsOfCategory(id: string) {
    return this.prisma.category.findUnique({
      where: { id },
      include: { rooms: true },
      // relations: ['rooms'],
    });
  }
}
