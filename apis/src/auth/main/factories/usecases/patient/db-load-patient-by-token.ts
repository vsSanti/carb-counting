import { DbLoadPatientByToken } from '@/auth/data/usecases/patient/db-load-patient-by-token';
import { LoadPatientByToken } from '@/auth/domain/usecases';
import { JwtAdapter } from '@/auth/infra/criptography';
import { PgPatientRepository } from '@/auth/infra/db/pg/repositories';
import env from '@/common/main/config/env';

export const makeDbLoadPatientByToken = (): LoadPatientByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientByToken = new DbLoadPatientByToken(jwtAdapter, pgPatientRepository);

  return dbLoadPatientByToken;
};
