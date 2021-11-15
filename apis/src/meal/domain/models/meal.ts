import { BaseModel } from '@/common/domain/base';

import { MealFoodModel } from './meal-food';

type Meal = {
  mealFoods: MealFoodModel[];
  patientId: string;
  patientInsulinUnitsPerDay?: number;
  patientSensibilityFactor?: number;
  patientInsulinCarbohydrateRatio?: number;
  patientGlycemicTarget: number;
  glucoseMeasurement: number;
  insulinUnitsToBeApplied: number;
  patientWeight?: number;
  patientHeight?: number;
};

export type MealModel = Meal & BaseModel;
