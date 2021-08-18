import faker from 'faker';

import { CriptographyGenerateTokens } from '@/data/usecases/criptography/criptography-generate-tokens';

import { EncrypterSpy } from '@/tests/data/mocks';

describe('CriptographyGenerateTokens Usecase', () => {
  let encrypterSpy: EncrypterSpy;
  let sut: CriptographyGenerateTokens;
  let id: string;

  beforeEach(() => {
    encrypterSpy = new EncrypterSpy();
    sut = new CriptographyGenerateTokens(encrypterSpy);
    id = faker.datatype.uuid();
  });

  it('should call Encrypter with correct values', async () => {
    await sut.generate(id);
    expect(encrypterSpy.plainText).toBe(id);
    expect(encrypterSpy.calledTimes).toBe(2);
    expect(encrypterSpy.expiresIn[0]).toBe(undefined);
    expect(encrypterSpy.expiresIn[1]).toBe('7d');
  });
});
