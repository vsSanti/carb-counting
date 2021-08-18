import { HashComparer } from '@/data/protocols/criptography';
import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { Authentication, AuthenticationParams } from '@/domain/usecases';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadPatientByEmailRepository: LoadPatientByEmailRepository,
    private readonly hashComparer: HashComparer
  ) {}

  async auth(params: AuthenticationParams): Promise<boolean> {
    const { email, password } = params;

    const account = await this.loadPatientByEmailRepository.loadByEmail(email);
    if (!account) return false;

    const isValidPassword = await this.hashComparer.compare(password, account.password);
    if (!isValidPassword) return false;

    return true;
  }
}
