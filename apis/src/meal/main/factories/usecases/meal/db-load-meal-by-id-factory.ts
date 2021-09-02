import { DbLoadMealById } from '@/meal/data/usecases/meal/db-load-meal-by-id';
import { LoadMealById } from '@/meal/domain/usecases';
import { PgMealRepository } from '@/meal/infra/db/pg/repositories';

export const makeDbLoadMealById = (): LoadMealById => {
  const pgMealRepository = new PgMealRepository();

  const dbLoadPatientById = new DbLoadMealById(pgMealRepository);

  return dbLoadPatientById;
};
