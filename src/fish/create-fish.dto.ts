import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class CreateFishDto {
 
  name:string;

  age : number;

  bread:string
}