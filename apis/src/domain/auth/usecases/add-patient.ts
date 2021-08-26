import { PatientModel } from '@/domain/auth/models';

export type AddPatientParams = Omit<PatientModel, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>;

export interface AddPatient {
  add: (params: AddPatientParams) => Promise<PatientModel>;
}
