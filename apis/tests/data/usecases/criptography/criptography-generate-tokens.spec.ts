import faker from 'faker';

import { CriptographyGenerateTokens } from '@/data/usecases/criptography/criptography-generate-tokens';

import { EncrypterSpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

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

  it('should throw if Encrypter throws', async () => {
    jest.spyOn(encrypterSpy, 'encrypt').mockImplementationOnce(throwError);
    const promise = sut.generate(id);
    await expect(promise).rejects.toThrow();
  });

  it('should return an TokensModel on success', async () => {
    const { accessToken, refreshToken } = await sut.generate(id);
    expect(encrypterSpy.calledTimes).toBe(2);
    expect(accessToken).toBe(encrypterSpy.cipherText[0]);
    expect(refreshToken).toBe(encrypterSpy.cipherText[1]);
  });
});
