import { DbListFoods } from '@/data/meal/usecases/meal/db-list-foods';
import { ListFoods } from '@/domain/meal/usecases';
import { PgFoodRepository } from '@/infra/meal/db/pg/repositories';

export const makeDbListFoods = (): ListFoods => {
  const pgFoodRepository = new PgFoodRepository();

  const dbLoadPatientById = new DbListFoods(pgFoodRepository);

  return dbLoadPatientById;
};
