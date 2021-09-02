import { Controller } from '@/common/presentation/protocols';
import { makeDbLoadMealById } from '@/meal/main/factories/usecases/meal/db-load-meal-by-id-factory';
import { LoadMealByIdController } from '@/meal/presentation/controllers/meal';

export const makeLoadMealByIdController = (): Controller => {
  const listFoodsController = new LoadMealByIdController(makeDbLoadMealById());

  return listFoodsController;
};
