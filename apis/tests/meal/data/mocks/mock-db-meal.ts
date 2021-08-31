import faker from 'faker';

import { AddMealRepository } from '@/meal/data/protocols/db';
import { AddMealParams } from '@/meal/domain/usecases';

export class AddMealRepositorySpy implements AddMealRepository {
  mealId = faker.datatype.uuid();
  params: AddMealParams;

  async add(params: AddMealParams): Promise<string> {
    this.params = params;
    return this.mealId;
  }
}
