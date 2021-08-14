import { HashComparer } from '@/data/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { AuthenticationModel } from '@/domain/models';
import { Authentication, AuthenticationParams } from '@/domain/usecases';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository,
    private readonly hashComparer: HashComparer
  ) {}

  async auth(params: AuthenticationParams): Promise<AuthenticationModel> {
    const { email, password } = params;
    const account = await this.loadPatientByEmailRepository.loadByEmail(email);

    if (!account) return null;

    await this.hashComparer.compare(password, account.password);

    return null;
  }
}
