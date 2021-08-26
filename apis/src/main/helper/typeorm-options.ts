import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import env from '@/main/config/env';
import { PgPatient } from '@/infra/auth/db/pg/entities';
import { PgFood } from '@/infra/meal/db/pg/entities';

const typeORMOptions: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  port: 5432,
  synchronize: false,
  logging: false,
  host: env.database.host,
  database: env.database.database,
  username: env.database.username,
  password: env.database.password,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
};

export const typeORMAuthOptions = {
  ...typeORMOptions,
  entities: [PgPatient],
};

export const typeORMMealOptions = {
  ...typeORMOptions,
  entities: [PgFood],
};
