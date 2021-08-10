import { DbAddPatient } from '@/data/usecases/patient/db-add-patient';

import { mockAddPatientParams } from '@/tests/domain/mocks';
import { LoadPatientByEmailRepositorySpy } from '@/tests/data/mocks';

type SutTypes = {
  sut: DbAddPatient;
  loadAccountByEmailRepositorySpy: LoadPatientByEmailRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadAccountByEmailRepositorySpy = new LoadPatientByEmailRepositorySpy();
  const sut = new DbAddPatient(loadAccountByEmailRepositorySpy);

  return {
    sut,
    loadAccountByEmailRepositorySpy,
  };
};

describe('DbAddPatient Usecase', () => {
  it('should call LoadAccountByEmailRepository with correct email', async () => {
    const { sut, loadAccountByEmailRepositorySpy } = makeSut();
    const addPatientParams = mockAddPatientParams();
    await sut.add(addPatientParams);
    expect(loadAccountByEmailRepositorySpy.email).toBe(addPatientParams.email);
  });
});
