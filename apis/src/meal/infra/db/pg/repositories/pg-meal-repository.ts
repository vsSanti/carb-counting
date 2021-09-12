import { getRepository } from 'typeorm';

import {
  AddMealRepository,
  ListMealsRepository,
  ListMealsRepositoryOptions,
  LoadMealByIdRepository,
} from '@/meal/data/protocols/db';
import { AddMealParams } from '@/meal/domain/usecases';
import { PgFood, PgMeal, PgMealFood } from '@/meal/infra/db/pg/entities';
import { MealModel } from '@/meal/domain/models';

export class PgMealRepository
  implements AddMealRepository, ListMealsRepository, LoadMealByIdRepository
{
  private roundNumber = (num: number): number => {
    return Math.round(num * 100) / 100;
  };

  private calculateInsulinUnitsToBeApplied = (
    insulinUnitsPerDay: number,
    glucoseMeasurement: number,
    glycemicTarget: number,
    totalAmountOfCarbohydrate: number
  ): number => {
    const sensibilityFactor = this.roundNumber(2000 / insulinUnitsPerDay);
    const insulinCarbohydrateRatio = this.roundNumber(400 / insulinUnitsPerDay);
    const correctionBolus = Math.round((glucoseMeasurement - glycemicTarget) / sensibilityFactor);
    const mealBolus = Math.round(totalAmountOfCarbohydrate / insulinCarbohydrateRatio);

    return mealBolus + correctionBolus;
  };

  async add(data: AddMealParams): Promise<string> {
    const pgFoodRepository = getRepository(PgFood);
    const pgMealRepository = getRepository(PgMeal);
    const pgMealFoodRepository = getRepository(PgMealFood);

    const mealFoodsWithFoods = await Promise.all(
      data.mealFoods.map(async (mf) => {
        const food = await pgFoodRepository.findOne(mf.foodId);
        return {
          weight: mf.weight,
          carbohydrateTotal: (mf.weight / 100) * food.carbohydrate,
          food,
        };
      })
    );

    const totalAmountOfCarbohydrate = mealFoodsWithFoods.reduce(
      (acc, curr) => acc + curr.carbohydrateTotal,
      0
    );

    const insulinUnitsToBeApplied = this.calculateInsulinUnitsToBeApplied(
      data.patientInsulinUnitsPerDay,
      data.glucoseMeasurement,
      data.patientGlycemicTarget,
      totalAmountOfCarbohydrate
    );

    const result = await pgMealRepository.save({
      ...data,
      insulinUnitsToBeApplied,
      mealFoods: await pgMealFoodRepository.save(mealFoodsWithFoods),
    });

    return result.id;
  }

  async listAll(options: ListMealsRepositoryOptions): Promise<MealModel[]> {
    const pgMealRepository = getRepository(PgMeal);
    const { page, patientId } = options;

    const meals = await pgMealRepository.find({
      where: { patientId },
      relations: ['mealFoods', 'mealFoods.food'],
      take: 10,
      skip: (page - 1) * 10,
      order: { createdAt: 'DESC' },
    });

    return meals;
  }

  async loadById(id: string): Promise<MealModel> {
    const pgMealRepository = getRepository(PgMeal);

    const meal = await pgMealRepository.findOne({
      where: { id },
      relations: ['mealFoods', 'mealFoods.food'],
    });

    return meal;
  }
}
