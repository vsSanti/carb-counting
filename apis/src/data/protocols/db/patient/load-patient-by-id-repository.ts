import { PatientModel } from '@/domain/models/auth';

export interface LoadPatientByIdRepository {
  loadById: (id: string) => Promise<PatientModel>;
}
