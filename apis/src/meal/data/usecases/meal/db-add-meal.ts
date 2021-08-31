import { AddMealRepository } from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { AddMeal, AddMealParams } from '@/meal/domain/usecases';

export class DbAddMeal implements AddMeal {
  constructor(private readonly addMealRepository: AddMealRepository) {}

  async add(params: AddMealParams): Promise<MealModel> {
    await this.addMealRepository.add(params);
    return null;
  }
}
