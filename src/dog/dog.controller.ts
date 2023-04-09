import { DogService } from './dog.service';
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags("dog")
@Controller('dog')
export default class OrmController {
  constructor(private readonly dogService:DogService){

  }
  @Get()
  get(){
    return this.dogService.createDog({
      name:'zs',
      age:1,
      height:60,
      sex:1
    })
  }
}