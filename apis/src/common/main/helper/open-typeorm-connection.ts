import { types } from 'pg';
import { createConnection, getConnection, ConnectionOptions } from 'typeorm';

import { typeORMAuthOptions, typeORMMealOptions } from './typeorm-options';

types.setTypeParser(types.builtins.NUMERIC, (value: string): number => parseFloat(value));

export type DbNames = 'auth' | 'meal';

export async function openTypeORMConnection(db: DbNames): Promise<any> {
  let typeORMOptions: ConnectionOptions;

  switch (db) {
    case 'auth':
      typeORMOptions = typeORMAuthOptions;
      break;
    case 'meal':
      typeORMOptions = typeORMMealOptions;
      break;
    default:
      throw new Error('Allowed databases: "auth" and "meal"');
  }

  try {
    if (process.env.NODE_ENV === 'production') {
      return getConnection(typeORMOptions.name);
    }

    await getConnection(typeORMOptions.name).close();
    return createConnection(typeORMOptions);
  } catch (error) {
    console.log('[DB] Creating a new DB connection.');
    return createConnection(typeORMOptions);
  }
}
