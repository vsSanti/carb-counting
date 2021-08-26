import { ListFoodsRepository } from '@/data/meal/protocols/db';
import { FoodModel } from '@/domain/meal/models';

import { mockFoodModelList } from '@/tests/domain/meal/mocks';

export class ListFoodsRepositorySpy implements ListFoodsRepository {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async listAll(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return this.foodModels;
  }
}