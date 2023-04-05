import { UserRole } from './../entities/user.mongo.entity';
import { Inject } from "@nestjs/common";
import { SystemService } from "src/shared/system.service";
import { MongoRepository } from "typeorm";
import { User } from "../entities/user.mongo.entity";


export class UserService {

  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>
    ) {
  }

  create(createUserDto) {

    // 追加调用模块
    // console.log(this.systemService.getEnv())

    // 调用Modle
    return this.userRepository.save({
      name:"aaa",
      email:"aaa",
      phoneNumber:"123",
      role:UserRole.ADMIN
    })
    return 'This action adds a 🚀 new user';
  }
  fineAll(){
    return this.userRepository.findAndCount({})
  }
 }