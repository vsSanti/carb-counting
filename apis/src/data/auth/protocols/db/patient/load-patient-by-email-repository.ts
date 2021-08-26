import { PatientModel } from '@/domain/auth/models';

export interface LoadPatientByEmailRepository {
  loadByEmail: (email: string) => Promise<PatientModel>;
}
