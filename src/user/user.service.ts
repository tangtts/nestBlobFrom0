import { SystemService } from "src/shared/system.service";

export class UserService {

  constructor(
    // 追加模块注入
    private readonly systemService: SystemService
    ) {
  }

  create(createUserDto) {

    // 追加调用模块
    // console.log(this.systemService.getEnv())

    // 调用Modle
    return 'This action adds a 🚀 new user';
  }
 }