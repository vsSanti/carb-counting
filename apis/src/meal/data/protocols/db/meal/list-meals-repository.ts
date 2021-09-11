import { MealModel } from '@/meal/domain/models';

export type ListMealsRepositoryOptions = {
  page: number;
};

export interface ListMealsRepository {
  listAll: (options: ListMealsRepositoryOptions) => Promise<MealModel[]>;
}
