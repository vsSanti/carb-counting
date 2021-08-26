import { Hasher } from '@/data/protocols/auth/criptography';
import { AddPatientRepository, LoadPatientByEmailRepository } from '@/data/protocols/auth/db';
import { PatientModel } from '@/domain/models/auth';
import { AddPatient, AddPatientParams } from '@/domain/usecases/auth';

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
