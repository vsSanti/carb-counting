import { MealFoods } from './MealFood';

export type Meal = {
  id: string;
  createdAt: string;
  glucoseMeasurement: number;
  insulinUnitsToBeApplied: number;
  mealFoods: MealFoods[];
};
