import { FoodModel } from '@/meal/domain/models';

export interface ListFoods {
  list: () => Promise<FoodModel[]>;
}
