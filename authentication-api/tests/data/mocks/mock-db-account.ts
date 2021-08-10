import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';

export class LoadPatientByEmailRepositorySpy implements LoadPatientByEmailRepository {
  result = null;
  email: string;

  async loadByEmail(email: string): Promise<PatientModel> {
    this.email = email;
    return this.result;
  }
}
