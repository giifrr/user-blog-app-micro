import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/create_user.dtos';
import { FindOneRequestDto } from 'src/users/dtos/find_one_request.dto';
import { CreateUserResponse, FindOneResponse } from 'src/users/user.pb';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {

  }

  async createUser(payload: CreateUserDto): Promise<CreateUserResponse> {
    let newUser = this.userRepository.create(payload);
    this.userRepository.save(newUser);
    return {status: 201, message: 'created', user: newUser};
  }

  async findOne(request: FindOneRequestDto): Promise<FindOneResponse> {
    const user = await this.userRepository.findOneBy({id: request.id});

    if (!user) throw new NotFoundException();

    return { status: 200, message: 'success', user: user};
  }
}
