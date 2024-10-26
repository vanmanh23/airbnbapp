import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/users.dto';
import 'dotenv/config';
import * as nodemailer from 'nodemailer';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  private transporter;
  constructor(
    private prisma: PrismaService,
    // @InjectRepository(User) private userRepository: Repository<User>,
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
    return this.prisma.user.findFirst({ where: { email } });
  }
  findOneById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
  getAll() {
    return this.prisma.user.findMany();
  }
  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  createUser(requestBody: CreateUserDto) {
    const user = this.prisma.user.create({ data: requestBody });
    return user;
  }
  async updateUserWithEmail(email: string, isEmailVerified: boolean) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log('user', user);
    if (!user) {
      throw new Error('User not found');
    }
    // Kiểm tra nếu email đã được xác nhận
    if (user.isEmailVerified) {
      throw new Error('Email already verified');
    }
    Object.assign(user, { isEmailVerified });
    return this.prisma.user.update({ where: {id: user.id}, data: user });
  }
  async verifyEmail(email: string) {
    await this.updateUserWithEmail(email, true);
  }
  //
}
