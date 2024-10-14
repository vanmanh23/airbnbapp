import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';
import { RoomsService } from 'src/rooms/rooms.service';
import { Rooms } from 'src/rooms/rooms.entity';

@Controller('categories')
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
    private roomService: RoomsService,
  ) {}

  @Get()
  async GetAll(): Promise<Category[]> {
    try {
      return this.categoryService.getAll();
    } catch (e) {
      console.log(e);
    }
  }

  @Get(':title')
  async getByTitle(@Param('title') title: string): Promise<Category> {
    try {
      return this.categoryService.getByTitle(title);
    } catch (e) {
      console.log(e);
    }
  }

  @Get(':id')
  async removeById(@Param('id') id: string): Promise<void> {
    try {
      await this.categoryService.remove(id);
    } catch (e) {
      console.log(e);
    }
  }
  // @Get(':id')
  // async removeById(@Param('id') id: number): Promise<void> {
  //   try {
  //     await this.categoryService.remove(id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  @Get('rooms/:id')
  getRoomsCategory(@Param('id') id: string) {
    return this.categoryService.getAllRoomsOfCategory(id);
  }
  @Put(':id')
  async updateItem(
    @Body() categoryupdate: CategoryDto,
    @Param('id') id: string,
  ): Promise<Category> {
    const oldcategory = await this.categoryService.getById(id);
    return await this.categoryService.update(oldcategory, categoryupdate);
  }
  // @Get('rooms/:id')
  // getRoomsCategory(@Param('id') id: number) {
  //   return this.categoryService.getAllRoomsOfCategory(id);
  // }
  // @Put(':id')
  // async updateItem(
  //   @Body() categoryupdate: CategoryDto,
  //   @Param('id') id: number,
  // ): Promise<Category> {
  //   const oldcategory = await this.categoryService.getById(id);
  //   return await this.categoryService.update(oldcategory, categoryupdate);
  // }
  @Get('/allrooms')
  async getRooms(): Promise<Rooms[]> {
    return await this.roomService.getAllRoomsWithDetail();
  }
}
