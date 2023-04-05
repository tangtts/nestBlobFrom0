import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/services/user.service';
import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModuleOptions } from './shared/configs/module-options';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
