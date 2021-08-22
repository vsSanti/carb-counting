import { DbListFoods } from '@/data/usecases/meal/db-list-foods';
import { ListFoods } from '@/domain/usecases';
import { PgFoodRepository } from '@/infra/db/pg/repositories';

export const makeDbListFoods = (): ListFoods => {
  const pgFoodRepository = new PgFoodRepository();

  const dbLoadPatientById = new DbListFoods(pgFoodRepository);

  return dbLoadPatientById;
};
