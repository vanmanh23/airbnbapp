import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
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
  // async createUser(email: string, password: string) {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const user = this.userRepository.create({
  //     email,
  //     password: hashedPassword,
  //   });
  //   return this.userRepository.save(user);
  // }
}
