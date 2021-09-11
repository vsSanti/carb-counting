import { MealModel } from '@/meal/domain/models';

export type ListMealsOptions = {
  page: number;
  patientId: string;
};

export interface ListMeals {
  list: (options: ListMealsOptions) => Promise<MealModel[]>;
}
