import {
  AddPatientRepository,
  LoadPatientByEmailRepository,
  LoadPatientByIdRepository,
} from '@/auth/data/protocols/db';
import { PatientModel } from '@/auth/domain/models';
import { AddPatientParams } from '@/auth/domain/usecases';

import { mockPatientModel } from '@/tests/auth/domain/mocks';

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

export class LoadPatientByIdRepositorySpy implements LoadPatientByIdRepository {
  patientModel = mockPatientModel();
  id: string;

  async loadById(id: string): Promise<PatientModel> {
    this.id = id;
    return this.patientModel;
  }
}
