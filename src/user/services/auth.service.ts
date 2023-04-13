import { encrytPassword } from 'src/shared/utils/cryptogram.util';
import { LoginDTO } from './../dtos/login.dto';
import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import {JwtService} from "@nestjs/jwt"
import { User } from "../entities/user.mongo.entity";
import { MongoRepository } from 'typeorm';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
    ){}
  private certificate(user:User){
    const payload = {
      id:user._id
    }
    const token = this.jwtService.sign(payload)
    return token
  }

  async checkLoginForm(LoginDto:LoginDTO){
    const {phoneNumber,password}  = LoginDto;

    const user =await this.userRepository.findOneBy({
      phoneNumber
    })
    if(!user){
      throw new NotFoundException('用户不存在')
    }
    const {password:dbPassword,salt} = user;

    const currentHashPassword = encrytPassword(password,salt);

    if(dbPassword!==currentHashPassword){
       // 401
      throw new UnauthorizedException('认证失败')
    }
    return user
  }

 async login(login:LoginDTO){



    // 校验用户信息
    const user = await this.checkLoginForm(login);

    // 签发token

    const token = await this.certificate(user);

    return {
      data:{
        token
      }
    }
  }
}