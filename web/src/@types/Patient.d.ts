export type Patient = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  email: string;
  name: string;
  birthDate: string;
  sex: string;
  weight: number;
  height: number;
  glycemicTarget: number;
  insulinUnitsPerDay?: number;
  sensibilityFactor?: number;
  insulinCarbohydrateRatio?: number;
};
