import { HashComparer } from '@/auth/data/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/auth/data/protocols/db';
import { PatientModel } from '@/auth/domain/models';
import { Authentication, AuthenticationParams } from '@/auth/domain/usecases';

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
