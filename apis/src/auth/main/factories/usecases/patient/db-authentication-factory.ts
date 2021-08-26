import { DbAuthentication } from '@/auth/data/usecases/patient/db-authentication';
import { Authentication } from '@/auth/domain/usecases';
import { BcryptAdapter } from '@/auth/infra/criptography';
import { PgPatientRepository } from '@/auth/infra/db/pg/repositories';

export const makeDbAuthentication = (): Authentication => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAuthentication = new DbAuthentication(pgPatientRepository, bcryptAdapter);

  return dbAuthentication;
};
