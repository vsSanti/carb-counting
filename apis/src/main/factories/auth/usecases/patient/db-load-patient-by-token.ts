import { DbLoadPatientByToken } from '@/data/auth/usecases/patient/db-load-patient-by-token';
import { LoadPatientByToken } from '@/domain/auth/usecases';
import { JwtAdapter } from '@/infra/auth/criptography';
import { PgPatientRepository } from '@/infra/auth/db/pg/repositories';
import env from '@/main/config/env';

export const makeDbLoadPatientByToken = (): LoadPatientByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientByToken = new DbLoadPatientByToken(jwtAdapter, pgPatientRepository);

  return dbLoadPatientByToken;
};
