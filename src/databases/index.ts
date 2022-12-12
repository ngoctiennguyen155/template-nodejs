import { ConnectionOptions } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '../config';

const dbConnection: ConnectionOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts', 'dist/entity/**/*.js'],
  migrations: ['src/migration/**/*.ts', 'dist/migration/**/*.js'],
  subscribers: ['src/subscriber/**/*.ts', 'dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

export = dbConnection;
