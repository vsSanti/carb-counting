import { makeDbLoadPatientById } from '@/main/factories/usecases/patient/db-load-patient-by-id';
import { PatientsMeController } from '@/presentation/controllers/patient';
import { Controller } from '@/presentation/protocols';

import { makePatientsMeValidation } from './patients-me-validation-factory';

export const makePatientsMeController = (): Controller => {
  const patientsMeController = new PatientsMeController(
    makePatientsMeValidation(),
    makeDbLoadPatientById()
  );

  return patientsMeController;
};
