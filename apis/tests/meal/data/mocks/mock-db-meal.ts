import faker from 'faker';

import {
  AddMealRepository,
  ListMealsRepository,
  ListMealsRepositoryOptions,
  LoadMealByIdRepository,
} from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { AddMealParams } from '@/meal/domain/usecases';

import { mockMealModel, mockMealModelList } from '@/tests/meal/domain/mocks';

export class AddMealRepositorySpy implements AddMealRepository {
  mealId = faker.datatype.uuid();
  params: AddMealParams;

  async add(params: AddMealParams): Promise<string> {
    this.params = params;
    return this.mealId;
  }
}

export class ListMealsRepositorySpy implements ListMealsRepository {
  foodModels = mockMealModelList();
  options: ListMealsRepositoryOptions;

  async listAll(options: ListMealsRepositoryOptions): Promise<MealModel[]> {
    this.options = options;
    return this.foodModels;
  }
}

export class LoadMealByIdRepositorySpy implements LoadMealByIdRepository {
  mealModel = mockMealModel();
  id: string;

  async loadById(id: string): Promise<MealModel> {
    this.id = id;
    return this.mealModel;
  }
}
