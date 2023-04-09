import { DuckModule } from './duck/duck.module';
import { TypeOrmModule } from "@nestjs/typeorm";

import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/services/user.service";
import { UserController } from "./user/user.controller";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { configModuleOptions } from "./shared/configs/module-options";

import { MongooseModule } from "@nestjs/mongoose";
import { CatsModule } from "./cat/cat.module";
import { DogModule } from "./dog/dog.module";
import { Fish } from "./fish/fish.entity";
import { FishModule } from "./fish/fish.module";
@Module({
  imports: [
    UserModule,
    DogModule,
    CatsModule,
    DuckModule,
    MongooseModule.forRoot("mongodb://localhost/test"),
    FishModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb://localhost/fish",
      entities: [Fish],
      synchronize: true, // 实体字段是否同步
      autoLoadEntities: true, // 自动加载实体
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
