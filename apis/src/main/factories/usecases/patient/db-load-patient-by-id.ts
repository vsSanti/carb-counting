import { DbLoadPatientById } from '@/data/usecases/patient/db-load-patient-by-id';
import { LoadPatientById } from '@/domain/usecases';
import { PgPatientRepository } from '@/infra/db/pg/repositories';

export const makeDbLoadPatientById = (): LoadPatientById => {
  const pgPatientRepository = new PgPatientRepository();

  const dbLoadPatientById = new DbLoadPatientById(pgPatientRepository);

  return dbLoadPatientById;
};
