import { DbAuthentication } from '@/data/usecases/patient/db-authentication';
import { AuthenticationParams } from '@/domain/usecases';

import { mockAuthenticationParams, throwError } from '@/tests/domain/mocks';
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

  it('should throw if LoadPatientByEmailRepository throws', async () => {
    jest.spyOn(loadPatientByEmailRepositorySpy, 'loadByEmail').mockImplementationOnce(throwError);
    const promise = sut.auth(authenticationParams);
    await expect(promise).rejects.toThrow();
  });

  it('should return null if LoadPatientByEmailRepository returns null', async () => {
    loadPatientByEmailRepositorySpy.patientModel = null;
    const model = await sut.auth(authenticationParams);
    expect(model).toBe(null);
  });
});
