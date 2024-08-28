import { Category } from 'src/category/category.entity';
import { RoomImage } from '../room-images/room-images.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@Entity()
export class Rooms {
  @PrimaryGeneratedColumn()
  id: number;
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

  @OneToMany(() => RoomImage, (roomImage) => roomImage.room)
  images: RoomImage[];
}
