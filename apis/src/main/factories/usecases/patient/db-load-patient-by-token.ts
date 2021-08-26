import { DbLoadPatientByToken } from '@/data/usecases/auth/patient/db-load-patient-by-token';
import { LoadPatientByToken } from '@/domain/usecases/auth';
import { JwtAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories/auth';
import env from '@/main/config/env';

export const makeDbLoadPatientByToken = (): LoadPatientByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientByToken = new DbLoadPatientByToken(jwtAdapter, pgPatientRepository);

  return dbLoadPatientByToken;
};
