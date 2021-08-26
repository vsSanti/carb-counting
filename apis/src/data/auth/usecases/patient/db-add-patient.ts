import { Hasher } from '@/data/auth/protocols/criptography';
import { AddPatientRepository, LoadPatientByEmailRepository } from '@/data/auth/protocols/db';
import { PatientModel } from '@/domain/auth/models';
import { AddPatient, AddPatientParams } from '@/domain/auth/usecases';

export class DbAddPatient implements AddPatient {
  constructor(
    private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository,
    private readonly hasher: Hasher,
    private readonly addPatientRepository: AddPatientRepository
  ) {}

  async add(params: AddPatientParams): Promise<PatientModel> {
    const patient = await this.loadPatientByEmailRepository.loadByEmail(params.email);
    if (patient) return null;

    const hashedPassword = await this.hasher.hash(params.password);
    const newPatient = await this.addPatientRepository.add({
      ...params,
      password: hashedPassword,
    });

    return newPatient;
  }
}
