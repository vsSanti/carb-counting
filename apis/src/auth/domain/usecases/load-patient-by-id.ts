import { PatientModel } from '@/auth/domain/models';

export interface LoadPatientById {
  load: (id: string) => Promise<PatientModel>;
}
