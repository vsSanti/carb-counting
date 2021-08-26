import { PatientModel } from '@/auth/domain/models';
import { AddPatientParams } from '@/auth/domain/usecases';

export interface AddPatientRepository {
  add: (data: AddPatientParams) => Promise<PatientModel>;
}
