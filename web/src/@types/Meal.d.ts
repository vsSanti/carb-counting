import { MealFoods } from './index';

export interface Meal {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  patientId: string;
  patientInsulinUnitsPerDay?: number | null;
  patientSensibilityFactor?: number | null;
  patientInsulinCarbohydrateRatio?: number | null;
  patientGlycemicTarget: number;
  glucoseMeasurement: number;
  insulinUnitsToBeApplied: number;
  patientWeight?: number | null;
  patientHeight?: number | null;
  mealFoods?: MealFoods[] | null;
}
