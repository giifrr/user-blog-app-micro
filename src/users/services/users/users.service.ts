import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/create_user.dtos';
import { CreateUserResponse } from 'src/users/user.pb';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {

  }

  async createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
    let newUser = this.userRepository.create(payload);

    return {status: 201, message: 'created', user: newUser};
  }
}
