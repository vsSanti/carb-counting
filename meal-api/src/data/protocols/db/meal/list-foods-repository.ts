import { FoodModel } from '@/domain/models';

export interface ListFoodsRepository {
  listAll: () => Promise<FoodModel[]>;
}
