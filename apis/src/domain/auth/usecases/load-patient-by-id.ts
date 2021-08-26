import { PatientModel } from '@/domain/auth/models';

export interface LoadPatientById {
  load: (id: string) => Promise<PatientModel>;
}
