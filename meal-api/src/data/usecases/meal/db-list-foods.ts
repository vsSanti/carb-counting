import { ListFoodsRepository } from '@/data/protocols/db';
import { FoodModel } from '@/domain/models';
import { ListFoods } from '@/domain/usecases';

export class DbListFoods implements ListFoods {
  constructor(private readonly listFoodsRepository: ListFoodsRepository) {}

  async list(): Promise<FoodModel[]> {
    const foodModels = await this.listFoodsRepository.listAll();
    return foodModels;
  }
}
