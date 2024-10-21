import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Rooms } from '../rooms/rooms.entity';

@Injectable()
@Entity()
export class RoomImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  imageUrl: string;

  @ManyToOne(() => Rooms, (room) => room.images)
  @JoinColumn({ name: 'roomid' })
  room: Rooms;
}
