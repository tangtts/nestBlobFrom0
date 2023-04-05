import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppLogger } from "./logger.service";

@Module({
  imports:[],
  providers:[AppLogger],
  exports:[AppLogger],
})
export class AppLoggerModule {

}