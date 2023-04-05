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
