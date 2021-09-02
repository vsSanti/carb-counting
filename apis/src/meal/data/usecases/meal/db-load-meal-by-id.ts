import { LoadMealByIdRepository } from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { LoadMealById } from '@/meal/domain/usecases';

export class DbLoadMealById implements LoadMealById {
  constructor(private readonly loadMealByIdRepository: LoadMealByIdRepository) {}

  async load(id: string): Promise<MealModel> {
    await this.loadMealByIdRepository.loadById(id);
    return null;
  }
}
