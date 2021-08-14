import faker from 'faker';

import { AuthenticationModel, PatientModel } from '@/domain/models';
import {
  AddPatient,
  AddPatientParams,
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases';

import { mockPatientModel } from '@/tests/domain/mocks';

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
  authenticationModel = {
    accessToken: faker.datatype.uuid(),
    refreshToken: faker.datatype.uuid(),
  };

  async auth(params: AuthenticationParams): Promise<AuthenticationModel> {
    this.params = params;
    return Promise.resolve(this.authenticationModel);
  }
}
