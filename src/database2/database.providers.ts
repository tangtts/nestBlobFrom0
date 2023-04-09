// database/database.providers.ts
import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    // Token可以自己设定
    provide: "DbConnectionToken",
    useFactory: async () => {
      const ds = new DataSource({
        type: "mongodb",
        url: "mongodb://localhost/duck",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      });
      ds.initialize();
      return ds;
    },
  },
];
