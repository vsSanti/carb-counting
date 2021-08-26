import { createConnection, getConnection, ConnectionOptions } from 'typeorm';

export async function openTypeORMConnection(options: ConnectionOptions): Promise<any> {
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
