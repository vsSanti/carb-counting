import faker from 'faker';
import { IBackup } from 'pg-mem';
import { getRepository, Repository, getConnection } from 'typeorm';

import { FoodModel } from '@/meal/domain/models';
import { AddMealParams } from '@/meal/domain/usecases';
import { PgFood } from '@/meal/infra/db/pg/entities';
import { PgMealRepository } from '@/meal/infra/db/pg/repositories';

import { mockFoodModel, mockAddMealParams } from '@/tests/meal/domain/mocks';
import { makeFakeDb } from '@/tests/meal/infra/db/pg/mocks';

describe('PgMeal Repository', () => {
  let sut: PgMealRepository;
  let pgFoodRepo: Repository<PgFood>;
  let backup: IBackup;
  let foodModels: FoodModel[];

  beforeAll(async () => {
    const db = await makeFakeDb();
    backup = db.backup();
    pgFoodRepo = getRepository(PgFood);
  });

  afterAll(async () => {
    await getConnection().close();
  });

  beforeEach(async () => {
    backup.restore();
    sut = new PgMealRepository();
    foodModels = await pgFoodRepo.save([
      mockFoodModel({ carbohydrate: 8 }),
      mockFoodModel({ carbohydrate: 30 }),
    ]);
  });

  describe('add', () => {
    it('should return a meal with calculated values on add success', async () => {
      const addMealParams: AddMealParams = {
        ...mockAddMealParams(),
        mealFoods: [
          {
            foodId: foodModels[0].id,
            weight: 125,
          },
          {
            foodId: foodModels[1].id,
            weight: 50,
          },
        ],
      };

      const mealId = await sut.add(addMealParams);

      expect(mealId).toBeTruthy();
    });
  });

  describe('loadById', () => {
    it("should return undefined if id isn't found", async () => {
      const patient = await sut.loadById(faker.datatype.uuid());
      expect(patient).toBeUndefined();
    });
  });
});
