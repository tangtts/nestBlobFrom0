import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, isNumber, IsOptional, Min } from "class-validator";
import {Transform} from "class-transformer"
export class ParginationParamsDto {
  @ApiPropertyOptional({
    description:"pageSize",
    type:Number,
    default:5,
    example:5 // input 框中的值
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Transform(({value})=>parseInt(value,10),{toClassOnly:true})
  pageSize = 5;


  @ApiPropertyOptional({
    description:"pageNum",
    type:Number,
    default:1,
    example:2
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Transform(({value})=>parseInt(value,10),{toClassOnly:true})
  pageNum = 1;
}