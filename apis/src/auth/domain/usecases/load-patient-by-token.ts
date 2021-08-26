import { PatientModel } from '@/auth/domain/models';

export interface LoadPatientByToken {
  load: (token: string) => Promise<PatientModel>;
}
