import { CreateUserDto } from "../dtos/create-user.dto";
import { ParginationParamsDto } from "./../../shared/dtos/pagination-params.dto";
import { UserRole } from "./../entities/user.mongo.entity";
import { Inject } from "@nestjs/common";
import { SystemService } from "src/shared/system.service";
import { MongoRepository } from "typeorm";
import { User } from "../entities/user.mongo.entity";
import { AppLogger } from "src/shared/logger/logger.service";
import { encrytPassword, makeSalt } from "src/shared/utils/cryptogram.util";
import { UploadService } from "src/upload/upload.service";

export class UserService {
  constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject("USER_REPOSITORY")
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: AppLogger,
    private readonly uploadService: UploadService
  ) {
    // 设置名字
    this.logger.setContext(UserService.name);
  }

  create(user: CreateUserDto) {
    if (user.password) {
      const { salt, hashPassword } = this.getPassword(user.password);
      user.salt = salt;
      user.password = hashPassword;
    }
    return this.userRepository.save(user);
  }

  async uploadAvatar(file) {
    const { url, path } = await this.uploadService.upload(file);
    return { data: url };
  }

  getPassword(password) {
    const salt = makeSalt();
    const hashPassword = encrytPassword(password, salt);
    return { salt, hashPassword };
  }

  async findAll({
    pageNum,
    pageSize,
  }: ParginationParamsDto): Promise<{ data: User[]; count: number }> {
    const [data, count] = await this.userRepository.findAndCount({
      skip: (pageNum - 1) * pageSize,
      take: pageSize * 1, // 必须乘以 1
      cache: true,
    });
    return {
      data,
      count,
    };
  }

  async getUser(id: string) {
    return await this.userRepository.findOneBy(id);
  }
}
