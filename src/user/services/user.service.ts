import { ParginationParamsDto } from './../../shared/dtos/pagination-params.dto';
import { UserRole } from './../entities/user.mongo.entity';
import { Inject } from "@nestjs/common";
import { SystemService } from "src/shared/system.service";
import { MongoRepository } from "typeorm";
import { User } from "../entities/user.mongo.entity";
import { AppLogger } from 'src/shared/logger/logger.service';


export class UserService {

  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: AppLogger
    ) {
      // 设置名字
      this.logger.setContext(UserService.name)
  }

  create(createUserDto) {

    // 追加调用模块
    // console.log(this.systemService.getEnv())
    this.logger.info(null,'user error',{
      a:13213
    })

    this.logger.debug(null,'user error',{
      a:1
    })
    // 调用Modle
    return this.userRepository.save({
      name:"aaa",
      email:"aaa",
      phoneNumber:"123"
    })
  }
 async findAll({pageNum,pageSize}:ParginationParamsDto):Promise<{data:User[],count:number}>{
    const [data,count] = await this.userRepository.findAndCount({
      skip:(pageNum-1) * pageSize,
      take:pageSize * 1,  // 必须乘以 1
      cache:true
    });
    return {
      data,
      count
    }
  }
 }