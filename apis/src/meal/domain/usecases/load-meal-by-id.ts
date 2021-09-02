import { MealModel } from '@/meal/domain/models';

export interface LoadMealById {
  load: (id: string) => Promise<MealModel>;
}
