import { makeDbListFoods } from '@/meal/main/factories/usecases/meal/db-list-foods-factory';
import { Controller } from '@/common/presentation/protocols';
import { ListFoodsController } from '@/meal/presentation/controllers/meal';

export const makeListFoodsController = (): Controller => {
  const listFoodsController = new ListFoodsController(makeDbListFoods());

  return listFoodsController;
};
