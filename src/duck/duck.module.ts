import { Module } from "@nestjs/common";
import { DucksController } from "./duck.controller";
import { DucksService } from "./duck.service";
import { DuckProviders } from "./duck.providers";
import { DatabaseModule } from "../database2/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [DucksController],
  providers: [DucksService, ...DuckProviders],
})
export class DuckModule {}
