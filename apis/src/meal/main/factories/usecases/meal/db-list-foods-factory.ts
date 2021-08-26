import { DbListFoods } from '@/meal/data/usecases/meal/db-list-foods';
import { ListFoods } from '@/meal/domain/usecases';
import { PgFoodRepository } from '@/meal/infra/db/pg/repositories';

export const makeDbListFoods = (): ListFoods => {
  const pgFoodRepository = new PgFoodRepository();

  const dbLoadPatientById = new DbListFoods(pgFoodRepository);

  return dbLoadPatientById;
};
