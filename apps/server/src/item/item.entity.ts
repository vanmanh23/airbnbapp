import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('decimal')
  price: number;
  @Column()
  description: string;
}
