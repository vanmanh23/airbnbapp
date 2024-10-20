import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: 'user' })
  role: string;
}
