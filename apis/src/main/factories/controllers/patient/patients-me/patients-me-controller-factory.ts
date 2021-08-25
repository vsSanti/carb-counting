import { makeDbLoadPatientById } from '@/main/factories/usecases/patient/db-load-patient-by-id';
import { PatientsMeController } from '@/presentation/controllers/patient';
import { Controller } from '@/presentation/protocols';

export const makePatientsMeController = (): Controller => {
  const patientsMeController = new PatientsMeController(makeDbLoadPatientById());

  return patientsMeController;
};
