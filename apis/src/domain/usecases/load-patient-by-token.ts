import { PatientModel } from '@/domain/models';

export interface LoadPatientByToken {
  load: (token: string) => Promise<PatientModel>;
}
