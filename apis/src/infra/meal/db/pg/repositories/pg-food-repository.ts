import { getRepository } from 'typeorm';

import { ListFoodsRepository } from '@/data/meal/protocols/db';
import { FoodModel } from '@/domain/meal/models';
import { PgFood } from '@/infra/meal/db/pg/entities';

export class PgFoodRepository implements ListFoodsRepository {
  async listAll(): Promise<FoodModel[]> {
    const pgFoodRepository = getRepository(PgFood);

    const pgFoods = await pgFoodRepository.find();

    return pgFoods;
  }
}
