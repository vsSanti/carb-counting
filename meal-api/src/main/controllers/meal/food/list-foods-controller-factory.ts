import { makeDbListFoods } from '@/main/usecases/meal/db-list-foods-factory';
import { ListFoodsController } from '@/presentation/controllers/meal';
import { Controller } from 'presentation-common';

export const makeListFoodsController = (): Controller => {
  const listFoodsController = new ListFoodsController(makeDbListFoods());

  return listFoodsController;
};
