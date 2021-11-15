import { AccountModel } from './account';

type Patient = {
  weight: number;
  height: number;
  sex: 'masculine' | 'feminine';
  glycemicTarget: number;
  insulinUnitsPerDay?: number;
};

export type PatientModel = AccountModel & Patient;
