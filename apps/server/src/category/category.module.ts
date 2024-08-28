import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { RoomsService } from 'src/rooms/rooms.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Rooms])],
  controllers: [CategoryController],
  providers: [CategoryService, RoomsService],
})
export class CategoryModule {}
