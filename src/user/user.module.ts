import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '@nestjs/config';
import { UserProviders } from './user.providers';

@Module({
  controllers: [UserController],
  providers: [UserService,...UserProviders],
  imports: [SharedModule]  // 引用模块
})
export class UserModule { }