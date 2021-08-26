import { FoodModel } from '@/domain/meal/models';

export interface ListFoods {
  list: () => Promise<FoodModel[]>;
}
