import { IsPhoneNumber } from 'class-validator';
import { ParginationParamsDto } from "./../shared/dtos/pagination-params.dto";
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./services/user.service";

@ApiTags("用户模块")
@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @ApiOperation({
    summary: "getHello",
  })
 
  @ApiBearerAuth()
  createOne(@Body() query): string {
    throw new HttpException("自定义异常", HttpStatus.NOT_IMPLEMENTED);
    // return this.userService.getHello(query);
  }

  @Post("/createOne")
  @ApiOperation({
    summary: "创建用户",
  })
  @ApiConsumes('application/json')
  @ApiProduces('application/json')
  @ApiBody({
    description: "body中的内容",
    type:CreateUserDto,
  })
  create(@Body() user) {
    return this.userService.create(user);
  }

  @Get("/findAll")
  @ApiOperation({
    summary: "查找所有用户",
    description: "有查询条件的查找所有用户",
  })
  @ApiResponse({
    status:HttpStatus.CREATED,
    description:"返回结果",
    type:  CreateUserDto
   })
  async findAll(@Query() query: ParginationParamsDto) {
    const { data, count } = await this.userService.findAll(query);
    return {
      data,
      meta: { total: count },
    };
  }

  



  @Get('/get/:id')
  @ApiParam({
      example:0,
      name: 'id',
      description: '这是用户id',
  })
  @ApiQuery({
      example:'zs',
      name: 'userName',
      required: false,
      description: '这是需要传递的参数',
  })
  @ApiHeader({
      name: 'authoriation',
      required: true,
      description: '本次请求请带上token',
  })
  getUser(@Param('id') id: string, @Query('userName') userName: string) {
      return this.userService.getUser(id);
  }

}
