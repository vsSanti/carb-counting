import { DbLoadPatientById } from '@/data/auth/usecases/patient/db-load-patient-by-id';
import { LoadPatientById } from '@/domain/auth/usecases';
import { PgPatientRepository } from '@/infra/auth/db/pg/repositories';

export const makeDbLoadPatientById = (): LoadPatientById => {
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientById = new DbLoadPatientById(pgPatientRepository);

  return dbLoadPatientById;
};
