import faker from 'faker';

import { DbLoadPatientByToken } from '@/data/usecases/patient/db-load-patient-by-token';
import { DecrypterSpy } from '@/tests/data/mocks';

describe('DbLoadPatientByToken Usecase', () => {
  let decrypterSpy: DecrypterSpy;
  let sut: DbLoadPatientByToken;
  let token: string;

  beforeEach(() => {
    decrypterSpy = new DecrypterSpy();
    sut = new DbLoadPatientByToken(decrypterSpy);
    token = faker.datatype.uuid();
  });

  it('should call Decrypter with correct value', async () => {
    await sut.load(token);
    expect(decrypterSpy.cipherText).toBe(token);
  });
});
