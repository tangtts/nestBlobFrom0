import { UploadService } from './../upload/upload.service';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import { DatabaseProviders } from "./database/database.providers";
import { AppLoggerModule } from "./logger/logger.module";
import {SystemService} from "./system.service"
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    AppLoggerModule,
  ],
  providers: [SystemService,...DatabaseProviders,UploadService],
  exports:[SystemService,ConfigModule,...DatabaseProviders,AppLoggerModule,
  
    UploadService
  ],
})
export class SharedModule {}