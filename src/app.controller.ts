import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateDto } from './dto';

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
  type:CreateDto
 })
  getHello(@Body() query:CreateDto): string {
    throw new HttpException("自定义异常",HttpStatus.NOT_IMPLEMENTED)
    return this.appService.getHello(query);
  }
}
