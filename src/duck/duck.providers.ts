// login/login.providers.ts
import { Connection, getMongoRepository } from 'typeorm';

import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Duck  } from "./duck.entity";

export const DuckProviders: Provider[] = [
  {
    provide: "DUCK_REPOSITORY",
    useFactory: async (appDataSource:DataSource) => await appDataSource.getRepository(Duck),
    // 注入 database.providers 的属性
    inject: ["DbConnectionToken"],
  },
];


