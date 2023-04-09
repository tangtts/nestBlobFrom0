import { DucksService } from './duck.service';
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ducks")
@Controller('ducks')
export  class DucksController {
  constructor(private readonly duckService:DucksService){

  }
  @Get()
  get(){
    return this.duckService.create({name:'zs',age:10 })
  }
}