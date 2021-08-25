import { DbLoadPatientByToken } from '@/data/usecases/patient/db-load-patient-by-token';
import { LoadPatientByToken } from '@/domain/usecases';
import { JwtAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories';
import env from '@/main/config/env';

export const makeDbLoadPatientByToken = (): LoadPatientByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientByToken = new DbLoadPatientByToken(jwtAdapter, pgPatientRepository);

  return dbLoadPatientByToken;
};
