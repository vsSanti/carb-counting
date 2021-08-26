import { DbAddPatient } from '@/data/usecases/auth/patient/db-add-patient';
import { AddPatient } from '@/domain/usecases/auth';
import { BcryptAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories/auth';

export const makeDbAddPatient = (): AddPatient => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAddPatient = new DbAddPatient(pgPatientRepository, bcryptAdapter, pgPatientRepository);

  return dbAddPatient;
};
