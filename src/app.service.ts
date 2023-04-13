import { CreateUserDto } from './user/dtos/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(query: CreateUserDto): string {
    return 'Hello World!';
  }
}
