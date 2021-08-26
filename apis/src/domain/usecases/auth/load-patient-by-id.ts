import { PatientModel } from '@/domain/models/auth';

export interface LoadPatientById {
  load: (id: string) => Promise<PatientModel>;
}
