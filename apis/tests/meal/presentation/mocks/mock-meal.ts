import { MealModel } from '@/meal/domain/models';
import { AddMeal, AddMealParams } from '@/meal/domain/usecases';

import { mockMealModel } from '@/tests/meal/domain/mocks';

export class AddMealSpy implements AddMeal {
  mealModel = mockMealModel();
  params: AddMealParams;

  async add(params: AddMealParams): Promise<MealModel> {
    this.params = params;
    return Promise.resolve(this.mealModel);
  }
}
