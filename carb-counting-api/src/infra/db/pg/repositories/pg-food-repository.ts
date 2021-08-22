import { getRepository } from 'typeorm';

import { ListFoodsRepository } from '@/data/protocols/db';
import { FoodModel } from '@/domain/models';
import { PgFood } from '@/infra/db/pg/entities';

export class PgFoodRepository implements ListFoodsRepository {
  async listAll(): Promise<FoodModel[]> {
    const pgFoodRepository = getRepository(PgFood);

    const pgFoods = await pgFoodRepository.find();

    return pgFoods;
  }
}
