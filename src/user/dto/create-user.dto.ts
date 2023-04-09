import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, isPhoneNumber, IsString, Length, Matches} from "class-validator"
export class CreateUserDto {
  @ApiProperty({example:"18623816693"})
  @IsPhoneNumber("CN")
  // @Matches(/\d{9,}/g,{message:"请输入正确的手机号"})
  phoneNumber:string;

  @ApiProperty({example:"password"})
  @IsNotEmpty()
  @Length(6,10)
  password:string

  @ApiProperty({example:"2939118014@qq.com"})
  @IsEmail()
  email:string

  @IsOptional()
  @IsString()
  salt:string
}