import {IsEmail, IsNotEmpty, Length, length, Matches} from "class-validator"
import { Common } from "src/shared/entities/common.entity";
import {PartialType} from "@nestjs/mapped-types"
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto  extends PartialType(CreateUserDto){

}