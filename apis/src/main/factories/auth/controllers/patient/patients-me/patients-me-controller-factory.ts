import { makeDbLoadPatientById } from '@/main/factories/auth/usecases/patient/db-load-patient-by-id';
import { PatientsMeController } from '@/presentation/auth/controllers/patient';
import { Controller } from '@/presentation/common/protocols';

export const makePatientsMeController = (): Controller => {
  const patientsMeController = new PatientsMeController(makeDbLoadPatientById());

  return patientsMeController;
};
