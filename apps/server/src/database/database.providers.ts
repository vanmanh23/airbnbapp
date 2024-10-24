import 'dotenv/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        url: process.env.DATABASE_URL,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        connectTimeout: 60 * 60 * 1000,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
