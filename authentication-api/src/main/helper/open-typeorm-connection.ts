import { createConnection, getConnection, ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import env from '@/main/config/env';
import { PgPatient } from '@/infra/db/pg/entities';

export async function openTypeORMConnection(): Promise<any> {
  const options: ConnectionOptions = {
    name: 'default',
    type: 'postgres',
    port: 5432,
    synchronize: false,
    logging: false,
    host: env.database.host,
    database: env.database.database,
    username: env.database.username,
    password: env.database.password,
    entities: [PgPatient],
    namingStrategy: new SnakeNamingStrategy(),
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
  };

  try {
    if (process.env.NODE_ENV === 'production') {
      return getConnection(options.name);
    }

    await getConnection(options.name).close();
    return createConnection(options);
  } catch (error) {
    console.log('[DB] Creating a new DB connection.');
    return createConnection(options);
  }
}
