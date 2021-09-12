import { DbListMeals } from '@/meal/data/usecases/meal/db-list-meals';
import { ListMeals } from '@/meal/domain/usecases';
import { PgMealRepository } from '@/meal/infra/db/pg/repositories';

export const makeDbListMeals = (): ListMeals => {
  const pgMealRepository = new PgMealRepository();

  const dbLoadPatientById = new DbListMeals(pgMealRepository);

  return dbLoadPatientById;
};
