import { DataType, IMemoryDb, newDb } from 'pg-mem';
import { Connection } from 'typeorm';
import faker from 'faker';

import { PgPatient } from '@/infra/db/pg/entities';

export const makeFakeDb = async (): Promise<IMemoryDb> => {
  const db = newDb();

  db.public.registerFunction({
    implementation: () => 'test',
    name: 'current_database',
  });

  db.registerExtension('uuid-ossp', (schema) => {
    schema.registerFunction({
      name: 'uuid_generate_v4',
      returns: DataType.uuid,
      implementation: faker.datatype.uuid,
      impure: true,
    });
  });

  const connection: Connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: [PgPatient],
  });

  await connection.synchronize();

  return db;
};
