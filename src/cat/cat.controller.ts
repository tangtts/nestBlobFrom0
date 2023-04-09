import { CatsService } from './cat.service';
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';

@ApiTags("cats")
@Controller('cats')
export  class CatsController {
  constructor(private readonly catService:CatsService){

  }
  @Get()
  get(){
    return this.catService.create({name:'zs',age:10,bread:"aa" })
  }
}