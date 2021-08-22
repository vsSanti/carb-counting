import { FoodModel } from '@/domain/models';
import { ListFoods } from '@/domain/usecases';

import { mockFoodModelList } from '@/tests/domain/mocks';

export class ListFoodsSpy implements ListFoods {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async list(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return Promise.resolve(this.foodModels);
  }
}
