import bcrypt from 'bcrypt';

import { BcryptAdapter } from '@/infra/auth/criptography';

import { throwError } from '@/tests/domain/auth/mocks';

jest.mock('bcrypt', () => ({
  async compare(): Promise<boolean> {
    return Promise.resolve(true);
  },
  async hash(): Promise<string> {
    return Promise.resolve('hash');
  },
}));

const salt = 12;

describe('Bcrypt Adapter', () => {
  let sut: BcryptAdapter;

  beforeEach(() => {
    sut = new BcryptAdapter(salt);
  });

  describe('hash()', () => {
    it('should call hash with correct values', async () => {
      const hashSpy = jest.spyOn(bcrypt, 'hash');
      await sut.hash('any_value');
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    it('should throw if hash throws', async () => {
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(throwError);
      const promise = sut.hash('any_value');
      await expect(promise).rejects.toThrow();
    });

    it('should return a valid hash on hash success', async () => {
      const hashedValue = await sut.hash('any_value');
      expect(hashedValue).toBe('hash');
    });
  });

  describe('compare()', () => {
    it('should call compare with correct values', async () => {
      const compareSpy = jest.spyOn(bcrypt, 'compare');
      await sut.compare('any_value', 'any_hash');
      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash');
    });

    it('should throw if compare throws', async () => {
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(throwError);
      const promise = sut.compare('any_value', 'any_hash');
      await expect(promise).rejects.toThrow();
    });

    it('should return true when compare succeeds', async () => {
      const hashedValue = await sut.compare('any_value', 'any_hash');
      expect(hashedValue).toBe(true);
    });

    it('should return false when compare fails', async () => {
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => false);
      const hashedValue = await sut.compare('any_value', 'any_hash');
      expect(hashedValue).toBe(false);
    });
  });
});
