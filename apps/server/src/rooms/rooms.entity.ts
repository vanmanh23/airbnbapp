import { Category } from '../../src/category/category.entity';
// import { Injectable } from '@nestjs/common';
import { RoomImage } from '../room-images/room-images.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// @Injectable()
@Entity()
export class Rooms {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column('bigint')
  price: number;

  @Column({ type: 'date', nullable: true })
  date: Date;

  @Column({ length: 50, nullable: true })
  distance: string;

  @ManyToOne(() => Category, (category) => category.rooms)
  category: Category;

  @OneToMany(() => RoomImage, (roomImage) => roomImage.room, { cascade: true })
  images: RoomImage[];
}
