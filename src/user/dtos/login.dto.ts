


import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, isPhoneNumber, IsString, Length, Matches} from "class-validator"
export class LoginDTO {
  @ApiProperty({example:"18623816693"})
  @IsPhoneNumber("CN")
  phoneNumber:string;

  @ApiProperty({example:"password"})
  @IsNotEmpty()
  password:string
}