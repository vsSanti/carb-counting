import { MealModel } from '@/meal/domain/models';

export interface LoadMealByIdRepository {
  loadById: (id: string) => Promise<MealModel>;
}
