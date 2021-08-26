import { DbAuthentication } from '@/data/usecases/auth/patient/db-authentication';
import { Authentication } from '@/domain/usecases/auth';
import { BcryptAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories/auth';

export const makeDbAuthentication = (): Authentication => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAuthentication = new DbAuthentication(pgPatientRepository, bcryptAdapter);

  return dbAuthentication;
};
