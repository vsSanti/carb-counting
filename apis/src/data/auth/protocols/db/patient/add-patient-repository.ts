import { PatientModel } from '@/domain/auth/models';
import { AddPatientParams } from '@/domain/auth/usecases';

export interface AddPatientRepository {
  add: (data: AddPatientParams) => Promise<PatientModel>;
}
