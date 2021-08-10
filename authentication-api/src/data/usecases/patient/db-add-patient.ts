import { Hasher } from '@/data/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { AddPatient, AddPatientParams } from '@/domain/usecases';

export class DbAddPatient implements AddPatient {
  constructor(
    private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository,
    private readonly hasher: Hasher
  ) {}

  async add(params: AddPatientParams): Promise<PatientModel> {
    await this.loadPatientByEmailRepository.loadByEmail(params.email);
    await this.hasher.hash(params.password);

    return null;
  }
}
