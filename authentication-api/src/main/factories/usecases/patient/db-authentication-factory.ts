import { DbAuthentication } from '@/data/usecases/patient/db-authentication';
import { Authentication } from '@/domain/usecases';
import { BcryptAdapter, JwtAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories';
import env from '@/main/config/env';

export const makeDbAuthentication = (): Authentication => {
  const bcryptAdapter = new BcryptAdapter(12);
  const jwtAdapter = new JwtAdapter(env.jwtSecret);
  const pgPatientRepository = new PgPatientRepository();

  const dbAuthentication = new DbAuthentication(pgPatientRepository, bcryptAdapter, jwtAdapter);

  return dbAuthentication;
};
