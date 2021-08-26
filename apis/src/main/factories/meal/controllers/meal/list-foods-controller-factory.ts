import { makeDbListFoods } from '@/main/factories/meal/usecases/meal/db-list-foods-factory';
import { Controller } from '@/presentation/common/protocols';
import { ListFoodsController } from '@/presentation/meal/controllers/meal';

export const makeListFoodsController = (): Controller => {
  const listFoodsController = new ListFoodsController(makeDbListFoods());

  return listFoodsController;
};
