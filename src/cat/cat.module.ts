import { Module } from '@nestjs/common';
import { CatsController } from "./cat.controller";
import { CatsService } from './cat.service';
import { catsProviders } from './cats.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    ...catsProviders,
  ],
})
export class CatsModule {}