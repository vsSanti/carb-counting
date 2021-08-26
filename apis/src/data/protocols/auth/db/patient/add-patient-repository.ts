import { PatientModel } from '@/domain/models/auth';
import { AddPatientParams } from '@/domain/usecases/auth';

export interface AddPatientRepository {
  add: (data: AddPatientParams) => Promise<PatientModel>;
}
