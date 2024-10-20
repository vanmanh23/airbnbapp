import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import 'dotenv/config';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    url: process.env.DATABASE_URL, // Use DATABASE_URL from the environment variable
    entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
    autoLoadEntities: true,

    // Implementaremos Migrations.
    /** Recursos
     *  * https://typeorm.io/#/migrations
     */
    // migrationsRun: true,
    // migrations: [join(__dirname, '../migration/**/*{.ts,.js}')],
    // migrationsTableName: 'migrations_typeorm',
    // cli: {
    //   migrationsDir: 'src/migration',
    // },

    // Activar SOLO MANUALMENTE en DESARROLLO SI ES NECESARIO (DESACTIVAR EN PRODUCCION).
    synchronize: false,
    logging: true,
    logger: 'file',
  };
}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));
