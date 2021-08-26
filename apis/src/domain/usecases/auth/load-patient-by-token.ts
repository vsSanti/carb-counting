import { PatientModel } from '@/domain/models/auth';

export interface LoadPatientByToken {
  load: (token: string) => Promise<PatientModel>;
}
