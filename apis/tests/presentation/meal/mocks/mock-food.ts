import { FoodModel } from '@/domain/meal/models';
import { ListFoods } from '@/domain/meal/usecases';

import { mockFoodModelList } from '@/tests/domain/meal/mocks';

export class ListFoodsSpy implements ListFoods {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async list(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return Promise.resolve(this.foodModels);
  }
}
