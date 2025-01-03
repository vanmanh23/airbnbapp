import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rooms } from './rooms.entity';
import { Category } from '../../src/category/category.entity';
import { PrismaModule } from 'src/prisma/prisma.module';
// import { Category } from 'src/category/category.entity';
// import { CategoryService } from 'src/category/category.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Rooms, Category])],
  imports: [PrismaModule],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsModule {}
