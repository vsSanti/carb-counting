import { PatientModel } from '@/domain/models';
import { AddPatientParams } from '@/domain/usecases';

export interface AddPatientRepository {
  add: (data: AddPatientParams) => Promise<PatientModel>;
}
