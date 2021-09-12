import { makeDbListMeals } from '@/meal/main/factories/usecases/meal/db-list-meals-factory';
import { Controller } from '@/common/presentation/protocols';
import { ListMealsController } from '@/meal/presentation/controllers/meal';

export const makeListMealsController = (): Controller => {
  const listMealsController = new ListMealsController(makeDbListMeals());

  return listMealsController;
};
