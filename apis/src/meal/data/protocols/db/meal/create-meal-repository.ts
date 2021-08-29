import { MealModel } from '@/meal/domain/models';

export type AddMealParams = Omit<
  MealModel,
  'id' | 'createdAt' | 'deletedAt' | 'updatedAt' | 'mealFoods'
> & {
  mealFoods: { id: string; weight: number }[];
};

export interface AddMealRepository {
  add: (data: AddMealParams) => Promise<MealModel>;
}
