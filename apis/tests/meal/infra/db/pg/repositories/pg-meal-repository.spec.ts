import MockDate from 'mockdate';
import faker from 'faker';
import { IBackup } from 'pg-mem';
import { getRepository, Repository, getConnection } from 'typeorm';

import { FoodModel } from '@/meal/domain/models';
import { AddMealParams } from '@/meal/domain/usecases';
import { PgFood, PgMeal, PgMealFood } from '@/meal/infra/db/pg/entities';
import { PgMealRepository } from '@/meal/infra/db/pg/repositories';

import { mockFoodModel, mockAddMealParams, mockMealModel } from '@/tests/meal/domain/mocks';
import { makeFakeDb } from '@/tests/meal/infra/db/pg/mocks';

describe('PgMeal Repository', () => {
  let sut: PgMealRepository;
  let pgFoodRepo: Repository<PgFood>;
  let pgMealRepo: Repository<PgMeal>;
  let pgMealFoodRepo: Repository<PgMealFood>;
  let backup: IBackup;
  let foodModels: FoodModel[];

  beforeAll(async () => {
    MockDate.set(new Date());
    const db = await makeFakeDb();
    backup = db.backup();
    pgFoodRepo = getRepository(PgFood);
    pgMealRepo = getRepository(PgMeal);
    pgMealFoodRepo = getRepository(PgMealFood);
  });

  afterAll(async () => {
    await getConnection().close();
    MockDate.reset();
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

  describe('listAll', () => {
    it('should return a meal with foods from patient', async () => {
      const mealModel = mockMealModel(foodModels);
      const insertedMeal = await pgMealRepo.save({
        ...mealModel,
        mealFoods: await pgMealFoodRepo.save(mealModel.mealFoods),
      });
      const meals = await sut.listAll({ page: 1, patientId: insertedMeal.patientId });
      const mealsToCompare = meals.map((meal) => ({
        ...meal,
        mealFoods: meal.mealFoods.map((mealFood) => ({
          ...mealFood,
          meal: null,
        })),
      }));
      expect(meals.length).toBe(1);
      expect(mealsToCompare).toEqual([insertedMeal]);
    });
  });

  describe('loadById', () => {
    it("should return undefined if id isn't found", async () => {
      const patient = await sut.loadById(faker.datatype.uuid());
      expect(patient).toBeUndefined();
    });

    it('should return a meal with foods if id is already registered', async () => {
      const mealModel = mockMealModel(foodModels);
      const insertedMeal = await pgMealRepo.save({
        ...mealModel,
        mealFoods: await pgMealFoodRepo.save(mealModel.mealFoods),
      });
      const meal = await sut.loadById(insertedMeal.id);
      meal.mealFoods[0].meal = null;
      expect(meal).toEqual(insertedMeal);
    });
  });
});
