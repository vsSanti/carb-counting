import { makeDbLoadPatientById } from '@/auth/main/factories/usecases/patient/db-load-patient-by-id';
import { PatientsMeController } from '@/auth/presentation/controllers/patient';
import { Controller } from '@/common/presentation/protocols';

export const makePatientsMeController = (): Controller => {
  const patientsMeController = new PatientsMeController(makeDbLoadPatientById());

  return patientsMeController;
};
