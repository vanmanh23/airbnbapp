import { Injectable } from '@nestjs/common';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Injectable()
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // id: number;
  @Column()
  icon: string;
  @Column()
  title: string;
  @OneToMany(() => Rooms, (rooms) => rooms.category)
  rooms: Rooms;
  // check commend
}
