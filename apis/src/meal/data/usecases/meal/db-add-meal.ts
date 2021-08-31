import { AddMealRepository, LoadMealByIdRepository } from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { AddMeal, AddMealParams } from '@/meal/domain/usecases';

export class DbAddMeal implements AddMeal {
  constructor(
    private readonly addMealRepository: AddMealRepository,
    private readonly loadMealByIdRepository: LoadMealByIdRepository
  ) {}

  async add(params: AddMealParams): Promise<MealModel> {
    const mealId = await this.addMealRepository.add(params);
    await this.loadMealByIdRepository.loadById(mealId);
    return null;
  }
}
