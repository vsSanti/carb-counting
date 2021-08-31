import faker from 'faker';

import { AddMealRepository, LoadMealByIdRepository } from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { AddMealParams } from '@/meal/domain/usecases';

import { mockMealModel } from '@/tests/meal/domain/mocks';

export class AddMealRepositorySpy implements AddMealRepository {
  mealId = faker.datatype.uuid();
  params: AddMealParams;

  async add(params: AddMealParams): Promise<string> {
    this.params = params;
    return this.mealId;
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
