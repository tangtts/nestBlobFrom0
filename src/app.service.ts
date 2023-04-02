import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto';

@Injectable()
export class AppService {
  getHello(query: CreateDto): string {
    return 'Hello World!';
  }
}
