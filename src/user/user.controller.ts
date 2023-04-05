import { ParginationParamsDto } from './../shared/dtos/pagination-params.dto';
import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './services/user.service';


@ApiTags("用户块")
@Controller("/user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService:ConfigService
    ) {}
  @Post()
  @ApiOperation({
    summary:"getHello"
  })
  @ApiBearerAuth()

  getHello(@Body() query): string {
   const a =  this.configService.get<string>("database")
   console.log(a)
    throw new HttpException("自定义异常",HttpStatus.NOT_IMPLEMENTED)
    // return this.userService.getHello(query);
  }

  @Post("/createOne")
  @ApiOperation({
    summary:"创建用户"
  })
  create(){
   return this.userService.create({})
  }

  @Get("/findAll")
  @ApiOperation({
    summary:"查找所有用户",
    description:"有查询条件的查找所有用户"
  })
  async findAll(@Query() query:ParginationParamsDto){
  const {data,count} =  await this.userService.findAll(query);
   return {
    data,
    meta:{total:count}
   }
  }

}
