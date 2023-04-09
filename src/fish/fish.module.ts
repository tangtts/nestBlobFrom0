import { TypeOrmModule } from "@nestjs/typeorm";
import { FishController } from "./fish.controller";
import { FishService } from "./fish.service";
import { Fish } from "./fish.entity";
import { Module } from "@nestjs/common";

@Module({
  imports: [TypeOrmModule.forFeature([Fish])],
  controllers: [FishController],
  providers: [FishService],
})
export class FishModule {}
