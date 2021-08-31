import { AddMealParams } from '@/meal/domain/usecases';

export interface AddMealRepository {
  add: (data: AddMealParams) => Promise<string>;
}
