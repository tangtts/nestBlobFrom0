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