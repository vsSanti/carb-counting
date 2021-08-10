import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { AddPatient, AddPatientParams } from '@/domain/usecases';

export class DbAddPatient implements AddPatient {
  constructor(private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository) {}

  async add(params: AddPatientParams): Promise<PatientModel> {
    await this.loadPatientByEmailRepository.loadByEmail(params.email);

    return null;
  }
}
