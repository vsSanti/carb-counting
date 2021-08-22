import { ListFoodsRepository } from '@/data/protocols/db';
import { FoodModel } from '@/domain/models';

import { mockFoodModelList } from '@/tests/domain/mocks';

export class ListFoodsRepositorySpy implements ListFoodsRepository {
  foodModels = mockFoodModelList();
  timesCalled = 0;

  async listAll(): Promise<FoodModel[]> {
    this.timesCalled += 1;
    return this.foodModels;
  }
}
