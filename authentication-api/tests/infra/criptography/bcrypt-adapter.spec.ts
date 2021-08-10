import bcrypt from 'bcrypt';

import { BcryptAdapter } from '@/infra/criptography';

import { throwError } from '@/tests/domain/mocks';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash');
  },
}));

type SutTypes = {
  sut: BcryptAdapter;
};

const salt = 12;
const makeSut = (): SutTypes => {
  const sut = new BcryptAdapter(salt);
  return { sut };
};

describe('Bcrypt Adapter', () => {
  describe('hash()', () => {
    it('should call hash with correct values', async () => {
      const { sut } = makeSut();
      const hashSpy = jest.spyOn(bcrypt, 'hash');
      await sut.hash('any_value');

      expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    it('should throw if hash throws', async () => {
      const { sut } = makeSut();
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError);
      const promise = sut.hash('any_value');
      await expect(promise).rejects.toThrow();
    });
  });
});
