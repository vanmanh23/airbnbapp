import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rooms } from '../rooms/rooms.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Entity()
export class RoomImage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rooms, (Rooms) => Rooms.images, { onDelete: 'CASCADE' })
  room: Rooms;

  @Column({ length: 500 })
  imageUrl: string;
}
