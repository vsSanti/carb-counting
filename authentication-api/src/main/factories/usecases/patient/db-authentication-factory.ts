import { DbAuthentication } from '@/data/usecases/patient/db-authentication';
import { Authentication } from '@/domain/usecases';
import { BcryptAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories';

export const makeDbAuthentication = (): Authentication => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAuthentication = new DbAuthentication(pgPatientRepository, bcryptAdapter);

  return dbAuthentication;
};
