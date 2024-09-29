import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/users.dto';
import 'dotenv/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UsersService {
  private transporter;
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  async findOne(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  findOneById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
  getAll() {
    return this.userRepository.find();
  }
  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
  createUser(requestBody: CreateUserDto) {
    const user = this.userRepository.create(requestBody);
    return this.userRepository.save(user);
  }
  async updateUserWithEmail(email: string, isEmailVerified: boolean) {
    const user = await this.userRepository.findOneBy({ email });
    console.log('user', user);
    if (!user) {
      throw new Error('User not found');
    }
    // Kiểm tra nếu email đã được xác nhận
    if (user.isEmailVerified) {
      throw new Error('Email already verified');
    }
    Object.assign(user, { isEmailVerified });
    return this.userRepository.save(user);
  }
  async verifyEmail(email: string): Promise<void> {
    await this.updateUserWithEmail(email, true);
  }
  //
}
