import { CreateUserRequest } from "../user.pb";

export class CreateUserDto implements CreateUserRequest {
  name: string;
  email: string;
  password: string;
  username: string;
}
