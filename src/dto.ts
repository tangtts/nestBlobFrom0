import { ApiProperty } from "@nestjs/swagger";

export class CreateDto {
  @ApiProperty({example:"123"})
  phoneNumber:string;
  @ApiProperty({example:"password"})
  password:string
  @ApiProperty({example:"email"})
  email:string
}