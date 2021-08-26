import { DbAuthentication } from '@/data/auth/usecases/patient/db-authentication';
import { Authentication } from '@/domain/auth/usecases';
import { BcryptAdapter } from '@/infra/auth/criptography';
import { PgPatientRepository } from '@/infra/auth/db/pg/repositories';

export const makeDbAuthentication = (): Authentication => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAuthentication = new DbAuthentication(pgPatientRepository, bcryptAdapter);

  return dbAuthentication;
};
