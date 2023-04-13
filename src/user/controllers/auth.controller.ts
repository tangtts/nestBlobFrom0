import { IsPhoneNumber } from 'class-validator';
import { ParginationParamsDto } from "../../shared/dtos/pagination-params.dto";
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { UploadDTO } from '../dtos/upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
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
import { CreateUserDto } from "../dtos/create-user.dto";
import { UserService } from "../services/user.service";
import { encryptFileMD5 } from 'src/shared/utils/cryptogram.util';
import { BaseApiErrorResponse, SwaggerBaseApiResponse } from 'src/shared/dtos/base-response.dto';
import { LoginDTO } from '../dtos/login.dto';
import { AuthService } from '../services/auth.service';

@ApiTags('认证鉴权')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  // @ApiOperation({
  //   summary: '用户注册',
  // })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   type: SwaggerBaseApiResponse(RegisterDTO),
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   type: BaseApiErrorResponse,
  // })
  // @Post('register')
  // async register(
  //   @Body() registerDTO: RegisterDTO
  // ): Promise<UserInfoSuccessVO> {
  //   return this.authService.register(registerDTO)
  // }


  @ApiOperation({
    summary: '用户登录',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: SwaggerBaseApiResponse(LoginDTO),
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    type: BaseApiErrorResponse,
  })
  @Post('login')
  async login(
    @Body() loginDTO: LoginDTO
  ): Promise<any> {
    return this.authService.login(loginDTO)
  }


  // @ApiOperation({
  //   summary: '当前用户信息',
  // })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   type: SwaggerBaseApiResponse(UserInfoDto),
  // })
  // @ApiBearerAuth()
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   type: BaseApiErrorResponse,
  // })
  // @Get('info')
  // @UseGuards(AuthGuard('jwt'))
  // async info(@Req() req: any): Promise<any> {
  //   const data = await this.authService.info(req.user.id)
  //   delete data.password
  //   delete data.salt
  //   return { data }
  // }

  // @Post('upload')
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(FileInterceptor('file'))
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  // async upload(
  //   @Req() req: any,
  //   @Body() uploadDTO: UploadDTO,
  //   @UploadedFile() file
  // ): Promise<any> {

  //   return await this.authService.uploadAvatar(req.user.id, file)
  // }

  // @ApiOperation({
  //   summary: '短信验证码',
  // })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   type: SwaggerBaseApiResponse(UserInfoDto),
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   type: BaseApiErrorResponse,
  // })
  // @Post('registerCode')
  // async registerCode(@Body() registerCodeDto: RegisterCodeDTO,): Promise<any> {

  //   const code = await this.authService.registerCode(registerCodeDto)

  //   return {
  //     msg: '验证码已生成',
  //     data: { code }
  //   }
  // }

  // @ApiOperation({
  //   summary: '短信用户注册/登录',
  // })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   type: SwaggerBaseApiResponse(RegisterSMSDTO),
  // })
  // @ApiResponse({
  //   status: HttpStatus.NOT_FOUND,
  //   type: BaseApiErrorResponse,
  // })
  // @Post('registerBySMS')
  // async registerBySMS(
  //   @Body() registerDTO: RegisterSMSDTO
  // ): Promise<UserInfoSuccessVO> {
  //   return this.authService.registerBySMS(registerDTO)
  // }

  // @ApiOperation({
  //   summary: '图形验证码',
  // })
  // @Get('captcha')  //当请求该接口时，返回一张随机图片验证码
  // async getCaptcha() {

  //   const data = await this.authService.getCaptcha()
  //   return {
  //     data
  //   }
  // }

}
