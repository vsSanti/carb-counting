import { DbAddPatient } from '@/data/usecases/patient/db-add-patient';

import { mockAddPatientParams, mockPatientModel, throwError } from '@/tests/domain/mocks';
import { HasherSpy, LoadPatientByEmailRepositorySpy } from '@/tests/data/mocks';

type SutTypes = {
  sut: DbAddPatient;
  loadPatientByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
  hasherSpy: HasherSpy;
};

const makeSut = (): SutTypes => {
  const loadPatientByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
  const hasherSpy = new HasherSpy();
  const sut = new DbAddPatient(loadPatientByEmailRepositorySpy, hasherSpy);

  return {
    sut,
    loadPatientByEmailRepositorySpy,
    hasherSpy,
  };
};

describe('DbAddPatient Usecase', () => {
  it('should call LoadPatientByEmailRepository with correct email', async () => {
    const { sut, loadPatientByEmailRepositorySpy } = makeSut();
    const addPatientParams = mockAddPatientParams();
    await sut.add(addPatientParams);
    expect(loadPatientByEmailRepositorySpy.email).toBe(addPatientParams.email);
  });

  it("should return null if LoadPatientByEmailRepository doesn't returns null", async () => {
    const { sut, loadPatientByEmailRepositorySpy } = makeSut();
    loadPatientByEmailRepositorySpy.result = mockPatientModel();
    const patient = await sut.add(mockAddPatientParams());
    expect(patient).toBeNull();
  });

  it('should throw if LoadPatientByEmailRepository throws', async () => {
    const { sut, loadPatientByEmailRepositorySpy } = makeSut();

    jest.spyOn(loadPatientByEmailRepositorySpy, 'loadByEmail').mockImplementationOnce(throwError);

    const errorPromise = sut.add(mockAddPatientParams());
    await expect(errorPromise).rejects.toThrow();
  });

  it('should call Hasher with correct password', async () => {
    const { sut, hasherSpy } = makeSut();
    const addPatientParams = mockAddPatientParams();
    await sut.add(addPatientParams);
    expect(hasherSpy.plainText).toBe(addPatientParams.password);
  });
});
