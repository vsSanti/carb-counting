import { DbLoadPatientById } from '@/data/usecases/patient/db-load-patient-by-id';
import { LoadPatientById } from '@/domain/usecases/auth';
import { PgPatientRepository } from '@/infra/db/pg/repositories/auth';

export const makeDbLoadPatientById = (): LoadPatientById => {
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientById = new DbLoadPatientById(pgPatientRepository);

  return dbLoadPatientById;
};
