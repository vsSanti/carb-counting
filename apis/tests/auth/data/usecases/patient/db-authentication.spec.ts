import { DbAuthentication } from '@/auth/data/usecases/patient/db-authentication';
import { AuthenticationParams } from '@/auth/domain/usecases';

import { throwError } from '@/tests/common/domain';
import { mockAuthenticationParams } from '@/tests/auth/domain/mocks';
import { HashComparerSpy, LoadPatientByEmailRepositorySpy } from '@/tests/auth/data/mocks';

describe('DbAuthentication Usecase', () => {
  let loadPatientByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
  let hashComparerSpy: HashComparerSpy;
  let sut: DbAuthentication;
  let authenticationParams: AuthenticationParams;

  beforeEach(() => {
    loadPatientByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
    hashComparerSpy = new HashComparerSpy();
    sut = new DbAuthentication(loadPatientByEmailRepositorySpy, hashComparerSpy);
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

  it('should call HashComparer with correct values', async () => {
    await sut.auth(authenticationParams);
    expect(hashComparerSpy.plainText).toBe(authenticationParams.password);
    expect(hashComparerSpy.digest).toBe(loadPatientByEmailRepositorySpy.patientModel.password);
  });

  it('should throw if HashComparer throws', async () => {
    jest.spyOn(hashComparerSpy, 'compare').mockImplementationOnce(throwError);
    const promise = sut.auth(authenticationParams);
    await expect(promise).rejects.toThrow();
  });

  it('should return null if HashComparer returns false', async () => {
    hashComparerSpy.isValid = false;
    const model = await sut.auth(authenticationParams);
    expect(model).toBe(null);
  });

  it('should return true on success', async () => {
    const patientModel = await sut.auth(authenticationParams);
    expect(patientModel).toEqual(loadPatientByEmailRepositorySpy.patientModel);
  });
});
