import { FoodModel } from '@/meal/domain/models';

export interface ListFoodsRepository {
  listAll: () => Promise<FoodModel[]>;
}
