import { Controller } from 'presentation-common';

import { makeDbLoadPatientById } from '@/main/factories/usecases/patient/db-load-patient-by-id';
import { PatientsMeController } from '@/presentation/controllers/patient';

export const makePatientsMeController = (): Controller => {
  const patientsMeController = new PatientsMeController(makeDbLoadPatientById());

  return patientsMeController;
};
