import { HashComparer } from '@/data/auth/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/data/auth/protocols/db';
import { PatientModel } from '@/domain/auth/models';
import { Authentication, AuthenticationParams } from '@/domain/auth/usecases';

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
