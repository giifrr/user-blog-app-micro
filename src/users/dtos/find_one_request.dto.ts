import { FindOneRequest } from "../user.pb";

export class FindOneRequestDto implements FindOneRequest {
  id: number;
}
