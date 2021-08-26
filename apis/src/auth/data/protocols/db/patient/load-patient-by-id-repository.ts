import { PatientModel } from '@/auth/domain/models';

export interface LoadPatientByIdRepository {
  loadById: (id: string) => Promise<PatientModel>;
}
