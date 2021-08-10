import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';

import { mockPatientModel } from '@/tests/domain/mocks';

export class LoadPatientByEmailRepositorySpy implements LoadPatientByEmailRepository {
  result = mockPatientModel();
  email: string;

  async loadByEmail(email: string): Promise<PatientModel> {
    this.email = email;
    return this.result;
  }
}
