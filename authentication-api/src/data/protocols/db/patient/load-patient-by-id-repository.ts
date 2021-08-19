import { PatientModel } from '@/domain/models';

export interface LoadPatientByIdRepository {
  loadById: (id: string) => Promise<PatientModel>;
}
