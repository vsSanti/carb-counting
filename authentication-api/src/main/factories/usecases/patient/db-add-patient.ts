import { DbAddPatient } from '@/data/usecases/patient/db-add-patient';
import { AddPatient } from '@/domain/usecases';
import { BcryptAdapter } from '@/infra/criptography';
import { PgPatientRepository } from '@/infra/db/pg/repositories';

export const makeDbAddPatient = (): AddPatient => {
  const bcryptAdapter = new BcryptAdapter(12);
  const pgPatientRepository = new PgPatientRepository();

  const dbAddPatient = new DbAddPatient(pgPatientRepository, bcryptAdapter, pgPatientRepository);

  return dbAddPatient;
};
