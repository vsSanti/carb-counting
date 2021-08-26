import { getRepository } from 'typeorm';

import { ListFoodsRepository } from '@/meal/data/protocols/db';
import { FoodModel } from '@/meal/domain/models';
import { PgFood } from '@/meal/infra/db/pg/entities';

export class PgFoodRepository implements ListFoodsRepository {
  async listAll(): Promise<FoodModel[]> {
    const pgFoodRepository = getRepository(PgFood);

    const pgFoods = await pgFoodRepository.find();

    return pgFoods;
  }
}
