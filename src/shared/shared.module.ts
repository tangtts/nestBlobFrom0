import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import {SystemService} from "./system.service"
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
  ],
  controllers:[],
  providers: [SystemService,ConfigModule],
  exports:[ConfigModule],
})
export class SharedModule {}