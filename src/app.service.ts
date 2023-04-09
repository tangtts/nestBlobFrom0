import { CreateUserDto } from './user/dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(query: CreateUserDto): string {
    return 'Hello World!';
  }
}
