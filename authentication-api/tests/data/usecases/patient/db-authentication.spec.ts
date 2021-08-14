import { DbAuthentication } from '@/data/usecases/patient/db-authentication';
import { AuthenticationParams } from '@/domain/usecases';

import { mockAuthenticationParams, throwError } from '@/tests/domain/mocks';
import { EncrypterSpy, HashComparerSpy, LoadPatientByEmailRepositorySpy } from '@/tests/data/mocks';

describe('DbAuthentication Usecase', () => {
  let loadPatientByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
  let hashComparerSpy: HashComparerSpy;
  let encrypterSpy: EncrypterSpy;
  let sut: DbAuthentication;
  let authenticationParams: AuthenticationParams;

  beforeEach(() => {
    loadPatientByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
    hashComparerSpy = new HashComparerSpy();
    encrypterSpy = new EncrypterSpy();
    sut = new DbAuthentication(loadPatientByEmailRepositorySpy, hashComparerSpy, encrypterSpy);
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

  it('should call Encrypter with correct plainText to generate tokens', async () => {
    await sut.auth(authenticationParams);
    expect(encrypterSpy.plainText).toBe(loadPatientByEmailRepositorySpy.patientModel.id);
    expect(encrypterSpy.calledTimes).toBe(2);
    expect(encrypterSpy.expiresIn[0]).toBe(undefined);
    expect(encrypterSpy.expiresIn[1]).toBe('7d');
  });

  it('should throw if Encrypter throws', async () => {
    jest.spyOn(encrypterSpy, 'encrypt').mockImplementationOnce(throwError);
    const promise = sut.auth(authenticationParams);
    await expect(promise).rejects.toThrow();
  });
});
