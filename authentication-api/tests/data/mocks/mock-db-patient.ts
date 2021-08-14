import { AddPatientRepository, LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { AddPatientParams } from '@/domain/usecases';

import { mockPatientModel } from '@/tests/domain/mocks';

export class AddPatientRepositorySpy implements AddPatientRepository {
  params: AddPatientParams;
  patientModel = mockPatientModel();

  async add(params: AddPatientParams): Promise<PatientModel> {
    this.params = params;
    return this.patientModel;
  }
}

export class LoadPatientByEmailRepositorySpy implements LoadPatientByEmailRepository {
  patientModel = mockPatientModel();
  email: string;

  async loadByEmail(email: string): Promise<PatientModel> {
    this.email = email;
    return this.patientModel;
  }
}
