import faker from 'faker';

import { AddMealParams } from '@/meal/domain/usecases';

export const mockAddMealParams = (): AddMealParams => ({
  glucoseMeasurement: 287,
  patientInsulinUnitsPerDay: 50,
  patientGlycemicTarget: 120,
  patientId: faker.datatype.uuid(),
  mealFoods: [],
});
