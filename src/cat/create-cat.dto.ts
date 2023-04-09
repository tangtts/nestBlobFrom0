import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateCatDto {
 
  name:string;

  age : number;

  bread:string
}