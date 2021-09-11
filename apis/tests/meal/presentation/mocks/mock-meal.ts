import { MealModel } from '@/meal/domain/models';
import {
  AddMeal,
  AddMealParams,
  ListMeals,
  ListMealsOptions,
  LoadMealById,
} from '@/meal/domain/usecases';

import { mockMealModel } from '@/tests/meal/domain/mocks';

export class AddMealSpy implements AddMeal {
  mealModel = mockMealModel();
  params: AddMealParams;

  async add(params: AddMealParams): Promise<MealModel> {
    this.params = params;
    return Promise.resolve(this.mealModel);
  }
}

export class ListMealsSpy implements ListMeals {
  mealModels = [mockMealModel(), mockMealModel(), mockMealModel()];
  options: ListMealsOptions;

  async list(options: ListMealsOptions): Promise<MealModel[]> {
    this.options = options;
    return Promise.resolve(this.mealModels);
  }
}

export class LoadMealByIdSpy implements LoadMealById {
  mealModel = mockMealModel();
  id: string;

  async load(id: string): Promise<MealModel> {
    this.id = id;
    return Promise.resolve(this.mealModel);
  }
}
