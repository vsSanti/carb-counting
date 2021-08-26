import { PatientModel } from '@/auth/domain/models';

export interface LoadPatientByEmailRepository {
  loadByEmail: (email: string) => Promise<PatientModel>;
}
