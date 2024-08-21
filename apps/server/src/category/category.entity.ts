import { Injectable } from '@nestjs/common';
import { Rooms } from 'src/rooms/rooms.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Injectable()
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  icon: string;
  @Column()
  title: string;
  @OneToMany(() => Rooms, (Rooms) => Rooms.id, { onDelete: 'CASCADE' })
  rooms: Rooms;
  // check commend
}
