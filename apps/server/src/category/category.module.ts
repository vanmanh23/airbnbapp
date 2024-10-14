import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { Rooms } from 'src/rooms/rooms.entity';
// import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Rooms])],
  controllers: [CategoryController],
  providers: [CategoryService, RoomsService],
  exports: [CategoryService],
})
export class CategoryModule {}
