import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, Length, length, Matches} from "class-validator"
export class CreateDto {
  @ApiProperty({example:"123"})
  @Matches(/\d{9,}/g,{message:"请输入正确的手机号"})
  phoneNumber:string;

  @ApiProperty({example:"password"})
  @IsNotEmpty()
  @Length(6,10)
  password:string

  @ApiProperty({example:"email"})
  @IsEmail()
  email:string
}