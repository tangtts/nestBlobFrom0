import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configModuleOptions } from "../configs/module-options";
import { SharedModule } from "../shared.module";
import { AppLogger } from "./logger.service";

@Module({
  providers:[AppLogger],
  exports:[AppLogger],
})
export class AppLoggerModule {

}