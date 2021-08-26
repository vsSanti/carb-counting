import { IBackup } from 'pg-mem';
import { getRepository, Repository, getConnection } from 'typeorm';

import { PgFood } from '@/infra/meal/db/pg/entities';
import { PgFoodRepository } from '@/infra/meal/db/pg/repositories/pg-food-repository';

import { mockFoodModel } from '@/tests/domain/meal/mocks';
import { makeFakeDb } from '@/tests/infra/meal/db/pg/mocks';

describe('PgFood Repository', () => {
  let sut: PgFoodRepository;
  let pgFoodRepo: Repository<PgFood>;
  let backup: IBackup;
  let foodModelToAdd: PgFood[];

  beforeAll(async () => {
    const db = await makeFakeDb();
    backup = db.backup();
    pgFoodRepo = getRepository(PgFood);
    foodModelToAdd = [mockFoodModel(), mockFoodModel(), mockFoodModel()];
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
