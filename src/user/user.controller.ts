import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';


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
}
