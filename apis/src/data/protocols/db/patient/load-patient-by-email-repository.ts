import { PatientModel } from '@/domain/models';

export interface LoadPatientByEmailRepository {
  loadByEmail: (email: string) => Promise<PatientModel>;
}
