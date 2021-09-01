import { makeDbAddMeal } from '@/meal/main/factories/usecases/meal/db-add-meal-factory';
import { Controller } from '@/common/presentation/protocols';
import { AddMealController } from '@/meal/presentation/controllers/meal';

import { makeAddMealValidation } from './add-meal-validation-factory';

export const makeAddMealController = (): Controller => {
  const listFoodsController = new AddMealController(makeAddMealValidation(), makeDbAddMeal());

  return listFoodsController;
};
