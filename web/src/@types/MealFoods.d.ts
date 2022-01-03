import { Food } from './index';

export interface MealFoods {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: null;
  weight: number;
  carbohydrateTotal: number;
  food: Food;
}
