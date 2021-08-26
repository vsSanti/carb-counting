import { DbAddPatient } from '@/data/auth/usecases/patient/db-add-patient';
import { AddPatient } from '@/domain/auth/usecases';
import { BcryptAdapter } from '@/infra/auth/criptography';
import { PgPatientRepository } from '@/infra/auth/db/pg/repositories';

export const makeDbAddPatient = (): AddPatient => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAddPatient = new DbAddPatient(pgPatientRepository, bcryptAdapter, pgPatientRepository);

  return dbAddPatient;
};
