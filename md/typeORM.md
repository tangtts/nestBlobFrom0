# 🚀 TypeORM 重要
```sh
  pnpm i typeorm
  pnpm i mongodb
  pnpm i mongoose
```
1. 首先在 `shared/database`定义文件 `database.providers.ts` 文件
```js
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const path =  require('path')
import { User } from '../../user/entities/user.mongo.entity';
import { DataSource,DataSourceOptions } from "typeorm"

const databaseType :DataSourceOptions['type'] = "mongodb"
export const DatabaseProviders:Provider[] = [
  {
    provide:'MONGODB_DATA_SOURCE',
    inject:[ConfigService], // url 用户名 密码
    useFactory:async (configService:ConfigService)=>{
      const config = {
        type:databaseType,
        entities: [path.join(__dirname, `../../**/*.mongo.entity{.js,.ts}`)],
        // entities: [User], 
        url: configService.get<string>('database.url'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.pass'),
        database: configService.get<string>('database.name'),
        logging: configService.get<boolean>('database.logging'),
        synchronize: configService.get<boolean>('database.synchronize'),
      }
      const ds = new DataSource(config);
      await ds.initialize()
      return ds
    }
  }
]
```
2. 在`shared.modules` 中暴露出去
```js
  @Module({
    imports: [
      ConfigModule.forRoot(configModuleOptions),
     ],
    providers: [SystemService,...DatabaseProviders],
    exports:[SystemService,ConfigModule,...DatabaseProviders]
   })
 ```
 
3.  在 `user` 中定义 实体类 `entities/user.mongo.entity.ts`
```js
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;
  // 昵称
  @Column("text")
  name: string;

  // @Unique('email', ['email'])
  @Column({ length: 200 })
  email: string;

  // 手机号
  @Column("text")
  phoneNumber: string;

  @Column()
  password: string;
}
```
4. 定义 `user.providers` 
```js
import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User  } from "./entities/user.mongo.entity";
export const UserProviders: Provider[] = [
  {
    provide: "USER_REPOSITORY",
    useFactory: async (appDataSource:DataSource) => await appDataSource.getRepository(User),
    // 注入 database.providers 的属性
    inject: ["MONGODB_DATA_SOURCE"],
  },
];
```
5. 在 `user.module` 暴露出去
```js
@Module({
  controllers: [UserController],
  providers: [UserService,...UserProviders],
  imports: [SharedModule]  // 引用模块
})
```
6. 在 server 中使用
   ```js
   import { User } from "../entities/user.mongo.entity";
   constructor(
    // 追加模块注入
    private readonly systemService: SystemService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: MongoRepository<User>
    ) {
  }
  ```