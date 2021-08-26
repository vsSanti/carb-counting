import faker from 'faker';

import { DbLoadPatientById } from '@/data/auth/usecases/patient/db-load-patient-by-id';

import { LoadPatientByIdRepositorySpy } from '@/tests/data/auth/mocks';
import { throwError } from '@/tests/domain/auth/mocks';

describe('DbLoadPatientById Usecase', () => {
  let loadPatientByIdRepositorySpy: LoadPatientByIdRepositorySpy;
  let sut: DbLoadPatientById;
  let id: string;

  beforeEach(() => {
    loadPatientByIdRepositorySpy = new LoadPatientByIdRepositorySpy();
    sut = new DbLoadPatientById(loadPatientByIdRepositorySpy);
    id = faker.datatype.uuid();
  });

  it('should call LoadPatientByIdRepository with correct id', async () => {
    await sut.load(id);
    expect(loadPatientByIdRepositorySpy.id).toBe(id);
  });

  it('should return null if LoadPatientByIdRepository returns null', async () => {
    loadPatientByIdRepositorySpy.patientModel = null;
    const account = await sut.load(id);
    expect(account).toBeNull();
  });

  it('should throw if LoadPatientByIdRepository throws', async () => {
    jest.spyOn(loadPatientByIdRepositorySpy, 'loadById').mockImplementationOnce(throwError);
    const errorPromise = sut.load(id);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should return a patient on success', async () => {
    const patient = await sut.load(id);
    expect(patient).toEqual(loadPatientByIdRepositorySpy.patientModel);
  });
});
