import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { AuthenticationModel } from '@/domain/models';
import { Authentication, AuthenticationParams } from '@/domain/usecases';

export class DbAuthentication implements Authentication {
  constructor(private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository) {}

  async auth(params: AuthenticationParams): Promise<AuthenticationModel> {
    const { email } = params;
    await this.loadPatientByEmailRepository.loadByEmail(email);
    return null;
  }
}
