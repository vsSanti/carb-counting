import { PatientModel } from '@/domain/models';

export interface LoadPatientById {
  load: (id: string) => Promise<PatientModel>;
}
