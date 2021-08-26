import { DbAddPatient } from '@/auth/data/usecases/patient/db-add-patient';
import { AddPatient } from '@/auth/domain/usecases';
import { BcryptAdapter } from '@/auth/infra/criptography';
import { PgPatientRepository } from '@/auth/infra/db/pg/repositories';

export const makeDbAddPatient = (): AddPatient => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAddPatient = new DbAddPatient(pgPatientRepository, bcryptAdapter, pgPatientRepository);

  return dbAddPatient;
};
