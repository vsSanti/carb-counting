import faker from 'faker';

import { DbLoadPatientById } from '@/data/usecases/patient/db-load-patient-by-id';

import { LoadPatientByIdRepositorySpy } from '@/tests/data/mocks';

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
});
