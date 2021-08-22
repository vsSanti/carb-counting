import { Controller } from 'presentation-common';

import { makeDbListFoods } from '@/main/factories/usecases/meal/db-list-foods-factory';
import { ListFoodsController } from '@/presentation/controllers/meal';

export const makeListFoodsController = (): Controller => {
  const listFoodsController = new ListFoodsController(makeDbListFoods());

  return listFoodsController;
};
