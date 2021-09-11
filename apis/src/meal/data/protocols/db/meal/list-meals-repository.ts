import { MealModel } from '@/meal/domain/models';

export type ListMealsRepositoryOptions = {
  page: number;
  patientId: string;
};

export interface ListMealsRepository {
  listAll: (options: ListMealsRepositoryOptions) => Promise<MealModel[]>;
}
