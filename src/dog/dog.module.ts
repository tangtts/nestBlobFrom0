import { Module } from "@nestjs/common";
import DogController from "./dog.controller";
import { DogService } from "./dog.service";
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from "./dog.schema";
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dog', schema: DogSchema }]),  ],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}