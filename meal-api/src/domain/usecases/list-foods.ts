import { FoodModel } from '@/domain/models';

export interface ListFoods {
  list: () => Promise<FoodModel[]>;
}
