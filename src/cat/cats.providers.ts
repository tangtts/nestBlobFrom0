import { Connection } from 'mongoose';
import { CatSchema } from './cat.schema';
export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Dogs', CatSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];