import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateDuckDto {
 
  name:string;
  age : number;

}