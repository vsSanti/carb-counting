import { HashComparer } from '@/data/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models/auth';
import { Authentication, AuthenticationParams } from '@/domain/usecases/auth';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository,
    private readonly hashComparer: HashComparer
  ) {}

  async auth(params: AuthenticationParams): Promise<PatientModel> {
    const { email, password } = params;

    const patient = await this.loadPatientByEmailRepository.loadByEmail(email);
    if (!patient) return null;

    const isValidPassword = await this.hashComparer.compare(password, patient.password);
    if (!isValidPassword) return null;

    return patient;
  }
}
