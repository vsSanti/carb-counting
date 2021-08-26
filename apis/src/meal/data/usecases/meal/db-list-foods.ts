import { ListFoodsRepository } from '@/meal/data/protocols/db';
import { FoodModel } from '@/meal/domain/models';
import { ListFoods } from '@/meal/domain/usecases';

export class DbListFoods implements ListFoods {
  constructor(private readonly listFoodsRepository: ListFoodsRepository) {}

  async list(): Promise<FoodModel[]> {
    const foodModels = await this.listFoodsRepository.listAll();
    return foodModels;
  }
}
