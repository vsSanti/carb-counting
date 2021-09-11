import { ListMealsRepository } from '@/meal/data/protocols/db';
import { MealModel } from '@/meal/domain/models';
import { ListMeals, ListMealsOptions } from '@/meal/domain/usecases';

export class DbListMeals implements ListMeals {
  constructor(private readonly listMealsRepository: ListMealsRepository) {}

  async list(options: ListMealsOptions): Promise<MealModel[]> {
    await this.listMealsRepository.listAll(options);
    return null;
  }
}
