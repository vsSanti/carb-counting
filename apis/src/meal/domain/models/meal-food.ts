import { BaseModel } from '@/common/domain/base';

import { FoodModel } from './food';
import { MealModel } from './meal';

type MealFood = {
  meal: MealModel;
  food: FoodModel;
  weight: number;
  carbohydrateTotal: number;
};

export type MealFoodModel = MealFood & BaseModel;
