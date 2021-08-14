import { DbAuthentication } from '@/data/usecases/patient/db-authentication';
import { AuthenticationParams } from '@/domain/usecases';

import { mockAuthenticationParams } from '@/tests/domain/mocks';
import { LoadPatientByEmailRepositorySpy } from '@/tests/data/mocks';

describe('DbAuthentication Usecase', () => {
  let sut: DbAuthentication;
  let loadPatientByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
  let authenticationParams: AuthenticationParams;

  beforeEach(() => {
    loadPatientByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
    sut = new DbAuthentication(loadPatientByEmailRepositorySpy);
    authenticationParams = mockAuthenticationParams();
  });

  it('should call LoadPatientByEmailRepository with correct email', async () => {
    await sut.auth(authenticationParams);
    expect(loadPatientByEmailRepositorySpy.email).toBe(authenticationParams.email);
  });
});
