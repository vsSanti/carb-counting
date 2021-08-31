import faker from 'faker';

import { MealModel } from '@/meal/domain/models';
import { AddMealParams } from '@/meal/domain/usecases';
import { mockFoodModel } from './mock-food';

export const mockAddMealParams = (): AddMealParams => ({
  glucoseMeasurement: 287,
  patientInsulinUnitsPerDay: 50,
  patientGlycemicTarget: 120,
  patientId: faker.datatype.uuid(),
  mealFoods: [],
});

export const mockMealModel = (): MealModel => ({
  id: faker.datatype.uuid(),
  createdAt: new Date(),
  updatedAt: new Date(),
  insulinUnitsToBeApplied: 10,
  glucoseMeasurement: 287,
  patientInsulinUnitsPerDay: 50,
  patientGlycemicTarget: 120,
  patientId: faker.datatype.uuid(),
  mealFoods: [
    {
      id: faker.datatype.uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
      carbohydrateTotal: 10,
      food: mockFoodModel(),
      meal: null,
      weight: 100,
    },
  ],
});
