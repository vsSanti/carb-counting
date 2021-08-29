import { BaseModel } from '@/common/domain/base';

import { FoodModel } from './food';
import { MealModel } from './meal';

type MealFood = {
  meal: MealModel;
  food: FoodModel;
  mealId: string;
  foodId: string;
  weight: number;
  carbohydrateTotal: number;
};

export type MealFoodModel = MealFood & BaseModel;
