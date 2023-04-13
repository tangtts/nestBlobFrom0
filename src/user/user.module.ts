import { AuthController } from './controllers/auth.controller';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '@nestjs/config';
import { UserProviders } from './user.providers';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController,AuthController],
  providers: [UserService,...UserProviders,AuthService],
  imports: [SharedModule,
  JwtModule.registerAsync(({
    inject:[ConfigService],
    imports:[SharedModule],
    useFactory:(configService:ConfigService)=>{
     return configService.get("jwt")
    }
  }))
  ]  // 引用模块
})
export class UserModule { }