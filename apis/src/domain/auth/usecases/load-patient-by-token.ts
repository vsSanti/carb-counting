import { PatientModel } from '@/domain/auth/models';

export interface LoadPatientByToken {
  load: (token: string) => Promise<PatientModel>;
}
