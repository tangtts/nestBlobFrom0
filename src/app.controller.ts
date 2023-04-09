import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateUserDto } from './user/dto/create-user.dto';

@ApiTags("初始化")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  @ApiOperation({
    summary:"getHello"
  })
 @ApiBearerAuth()
 @ApiResponse({
  status:HttpStatus.CREATED,
  description:"getHello",
  type:  CreateUserDto
 })
  getHello(@Body() query:CreateUserDto): string {
    throw new HttpException("自定义异常",HttpStatus.NOT_IMPLEMENTED)
    return this.appService.getHello(query);
  }






}
