import { PatientModel } from '@/domain/auth/models';

export interface LoadPatientByIdRepository {
  loadById: (id: string) => Promise<PatientModel>;
}
