import { DbAddMeal } from '@/meal/data/usecases/meal/db-add-meal';
import { AddMeal } from '@/meal/domain/usecases';
import { PgMealRepository } from '@/meal/infra/db/pg/repositories';

export const makeDbAddMeal = (): AddMeal => {
  const pgMealRepository = new PgMealRepository();

  const dbLoadPatientById = new DbAddMeal(pgMealRepository, pgMealRepository);

  return dbLoadPatientById;
};
