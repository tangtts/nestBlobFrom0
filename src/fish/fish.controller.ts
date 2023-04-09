import { FishService } from './fish.service';
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags("fish")
@Controller('fish')
export  class FishController {
  constructor(private readonly fishService:FishService){

  }
  @Get()
  get(){
    return this.fishService.create({name:'zs',age:10,bread:"aa" })
  }
}