import { ListFoodsRepository } from '@/data/meal/protocols/db';
import { FoodModel } from '@/domain/meal/models';
import { ListFoods } from '@/domain/meal/usecases';

export class DbListFoods implements ListFoods {
  constructor(private readonly listFoodsRepository: ListFoodsRepository) {}

  async list(): Promise<FoodModel[]> {
    const foodModels = await this.listFoodsRepository.listAll();
    return foodModels;
  }
}
