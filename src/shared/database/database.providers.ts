import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const path =  require('path')
import { User } from '../../user/entities/user.mongo.entity';
import { DataSource,DataSourceOptions } from "typeorm"
import { ConfigurationType } from '../configs/configration';

const databaseType :DataSourceOptions['type'] = "mongodb"
export const DatabaseProviders:Provider[] = [
  {
    provide:'MONGODB_DATA_SOURCE',
    inject:[ConfigService<ConfigurationType>], // url 用户名 密码
    useFactory:async (configService:ConfigService<Record<ConfigurationType,string>>)=>{
      const config = {
        type:databaseType,
        entities: [path.join(__dirname, `../../**/*.mongo.entity{.js,.ts}`)],
        // entities: [User], 
        url: configService.get("database.url"),
        username: configService.get('database.name'),
        password: configService.get('database.pass'),
        database: configService.get('database.name'),
        logging: configService.get('database.logging'),
        synchronize: configService.get<boolean>('database.synchronize'),
      }
      const ds = new DataSource(config);
      await ds.initialize()
      return ds
    }
  }
]