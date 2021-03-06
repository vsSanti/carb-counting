import { IBackup } from 'pg-mem';
import { getRepository, Repository, getConnection } from 'typeorm';

import { FoodModel } from '@/meal/domain/models';
import { PgFood } from '@/meal/infra/db/pg/entities';
import { PgFoodRepository } from '@/meal/infra/db/pg/repositories/pg-food-repository';

import { mockFoodModelList } from '@/tests/meal/domain/mocks';
import { makeFakeDb } from '@/tests/meal/infra/db/pg/mocks';

describe('PgFood Repository', () => {
  let sut: PgFoodRepository;
  let pgFoodRepo: Repository<PgFood>;
  let backup: IBackup;
  let foodModelToAdd: FoodModel[];

  beforeAll(async () => {
    const db = await makeFakeDb();
    backup = db.backup();
    pgFoodRepo = getRepository(PgFood);
    foodModelToAdd = mockFoodModelList();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  beforeEach(() => {
    backup.restore();
    sut = new PgFoodRepository();
  });

  describe('listAll', () => {
    it('should return every row in table', async () => {
      const savedFoodModels = await pgFoodRepo.save(foodModelToAdd);
      const foodModels = await sut.listAll();

      expect(foodModels).toBeTruthy();
      expect(foodModels.length).toEqual(foodModelToAdd.length);
      expect(foodModels).toEqual(savedFoodModels);
    });
  });
});
