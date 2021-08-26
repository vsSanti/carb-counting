import { FoodModel } from '@/domain/meal/models';

export interface ListFoodsRepository {
  listAll: () => Promise<FoodModel[]>;
}
