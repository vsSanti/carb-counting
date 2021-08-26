import { PatientModel } from '@/domain/auth/models';
import {
  AddPatient,
  AddPatientParams,
  Authentication,
  AuthenticationParams,
  LoadPatientById,
  LoadPatientByToken,
} from '@/domain/auth/usecases';

import { mockPatientModel } from '@/tests/domain/auth/mocks';

export class AddPatientSpy implements AddPatient {
  patientModel = mockPatientModel();
  addPatientParams: AddPatientParams;

  async add(patient: AddPatientParams): Promise<PatientModel> {
    this.addPatientParams = patient;
    return Promise.resolve(this.patientModel);
  }
}

export class AuthenticationSpy implements Authentication {
  params: AuthenticationParams;
  patientModel = mockPatientModel();

  async auth(params: AuthenticationParams): Promise<PatientModel> {
    this.params = params;
    return Promise.resolve(this.patientModel);
  }
}

export class LoadPatientByIdSpy implements LoadPatientById {
  patientModel = mockPatientModel();
  id: string;

  async load(id: string): Promise<PatientModel> {
    this.id = id;
    return Promise.resolve(this.patientModel);
  }
}

export class LoadPatientByTokenSpy implements LoadPatientByToken {
  patientModel = mockPatientModel();
  token: string;

  async load(token: string): Promise<PatientModel> {
    this.token = token;
    return Promise.resolve(this.patientModel);
  }
}