import { ListFoodsRepository } from '@/meal/data/protocols/db';
import { FoodModel } from '@/meal/domain/models';

import { mockFoodModelList } from '@/tests/meal/domain/mocks';

export class ListFoodsRepositorySpy implements ListFoodsRepository {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async listAll(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return this.foodModels;
  }
}
