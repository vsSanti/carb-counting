import { MealModel } from '@/meal/domain/models';

export type ListMealsOptions = {
  page: number;
};

export interface ListMeals {
  list: (options: ListMealsOptions) => Promise<MealModel[]>;
}
