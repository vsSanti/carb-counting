import faker from 'faker';

import { DbLoadPatientByToken } from '@/data/usecases/patient/db-load-patient-by-token';

import { DecrypterSpy, LoadPatientByIdRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

describe('DbLoadPatientByToken Usecase', () => {
  let decrypterSpy: DecrypterSpy;
  let loadPatientByIdRepositorySpy: LoadPatientByIdRepositorySpy;
  let sut: DbLoadPatientByToken;
  let token: string;

  beforeEach(() => {
    decrypterSpy = new DecrypterSpy();
    loadPatientByIdRepositorySpy = new LoadPatientByIdRepositorySpy();
    sut = new DbLoadPatientByToken(decrypterSpy, loadPatientByIdRepositorySpy);
    token = faker.datatype.uuid();
  });

  it('should call Decrypter with correct value', async () => {
    await sut.load(token);
    expect(decrypterSpy.cipherText).toBe(token);
  });

  it('should return null if Decrypter returns null', async () => {
    decrypterSpy.plainText = null;
    const patient = await sut.load(token);
    expect(patient).toBeNull();
  });

  it('should return null if Decrypter throws', async () => {
    jest.spyOn(decrypterSpy, 'decrypt').mockImplementationOnce(throwError);
    const patient = await sut.load(token);
    expect(patient).toBeNull();
  });

  it('should call LoadPatientByIdRepository with correct value', async () => {
    await sut.load(token);
    expect(loadPatientByIdRepositorySpy.id).toBe(decrypterSpy.plainText);
  });

  it('should return null if LoadPatientByIdRepository returns null', async () => {
    loadPatientByIdRepositorySpy.patientModel = null;
    const account = await sut.load(token);
    expect(account).toBeNull();
  });
});
