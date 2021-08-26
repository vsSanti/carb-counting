import { FoodModel } from '@/meal/domain/models';
import { ListFoods } from '@/meal/domain/usecases';

import { mockFoodModelList } from '@/tests/meal/domain/mocks';

export class ListFoodsSpy implements ListFoods {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async list(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return Promise.resolve(this.foodModels);
  }
}
