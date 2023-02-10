import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserRequest, CreateUserResponse, FindOneRequest, FindOneResponse, USER_SERVICE_NAME } from 'src/users/user.pb';

@Controller('users')
export class UsersController {
  constructor(private readonly userServive: UsersService) {}

  @GrpcMethod(USER_SERVICE_NAME, 'CreateUser')
  createUser(payload: CreateUserRequest): Promise<CreateUserResponse> {
    return this.userServive.createUser(payload)
  }

  @GrpcMethod(USER_SERVICE_NAME, 'FindOne')
  findOne(request: FindOneRequest): Promise<FindOneResponse> {
    return this.userServive.findOne(request)
  }
}
