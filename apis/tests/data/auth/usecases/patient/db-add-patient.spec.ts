import { DbAddPatient } from '@/data/auth/usecases/patient/db-add-patient';
import { AddPatientParams } from '@/domain/auth/usecases';

import { mockAddPatientParams, mockPatientModel, throwError } from '@/tests/domain/auth/mocks';
import {
  AddPatientRepositorySpy,
  HasherSpy,
  LoadPatientByEmailRepositorySpy,
} from '@/tests/data/auth/mocks';

describe('DbAddPatient Usecase', () => {
  let sut: DbAddPatient;
  let loadPatientByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
  let hasherSpy: HasherSpy;
  let addPatientRepositorySpy: AddPatientRepositorySpy;
  let addPatientParams: AddPatientParams;

  beforeEach(() => {
    loadPatientByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
    hasherSpy = new HasherSpy();
    addPatientRepositorySpy = new AddPatientRepositorySpy();
    sut = new DbAddPatient(loadPatientByEmailRepositorySpy, hasherSpy, addPatientRepositorySpy);
    loadPatientByEmailRepositorySpy.patientModel = null;

    addPatientParams = mockAddPatientParams();
  });

  it('should call LoadPatientByEmailRepository with correct email', async () => {
    await sut.add(addPatientParams);
    expect(loadPatientByEmailRepositorySpy.email).toBe(addPatientParams.email);
  });

  it("should return null if LoadPatientByEmailRepository doesn't returns null", async () => {
    loadPatientByEmailRepositorySpy.patientModel = mockPatientModel();
    const patient = await sut.add(addPatientParams);
    expect(patient).toBeNull();
  });

  it('should throw if LoadPatientByEmailRepository throws', async () => {
    jest.spyOn(loadPatientByEmailRepositorySpy, 'loadByEmail').mockImplementationOnce(throwError);
    const errorPromise = sut.add(addPatientParams);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should call Hasher with correct password', async () => {
    await sut.add(addPatientParams);
    expect(hasherSpy.plainText).toBe(addPatientParams.password);
  });

  it('should throw if Hasher throws', async () => {
    jest.spyOn(hasherSpy, 'hash').mockImplementationOnce(throwError);
    const errorPromise = sut.add(addPatientParams);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should call AddPatientRepository with correct values', async () => {
    await sut.add(addPatientParams);
    expect(addPatientRepositorySpy.params).toEqual({
      ...addPatientParams,
      password: hasherSpy.digest,
    });
  });

  it('should throw if AddPatientRepository throws', async () => {
    jest.spyOn(addPatientRepositorySpy, 'add').mockImplementationOnce(throwError);
    const errorPromise = sut.add(addPatientParams);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should return a patient on success', async () => {
    const account = await sut.add(addPatientParams);
    expect(account).toEqual(addPatientRepositorySpy.patientModel);
  });
});
