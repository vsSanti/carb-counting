import { PatientModel } from '@/domain/models/auth';

export interface LoadPatientByEmailRepository {
  loadByEmail: (email: string) => Promise<PatientModel>;
}
