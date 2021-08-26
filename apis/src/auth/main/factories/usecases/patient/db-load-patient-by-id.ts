import { DbLoadPatientById } from '@/auth/data/usecases/patient/db-load-patient-by-id';
import { LoadPatientById } from '@/auth/domain/usecases';
import { PgPatientRepository } from '@/auth/infra/db/pg/repositories';

export const makeDbLoadPatientById = (): LoadPatientById => {
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientById = new DbLoadPatientById(pgPatientRepository);

  return dbLoadPatientById;
};
