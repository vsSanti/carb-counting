import jwt from 'jsonwebtoken';

import { JwtAdapter } from '@/infra/criptography';

import { throwError } from '@/tests/domain/mocks';

jest.mock('jsonwebtoken', () => ({
  async sign(): Promise<string> {
    return 'token';
  },
}));

describe('Jwt Adapter', () => {
  let sut: JwtAdapter;

  beforeEach(() => {
    sut = new JwtAdapter('secret');
  });

  describe('sign()', () => {
    it('should call sign with correct values', async () => {
      const signSpy = jest.spyOn(jwt, 'sign');
      await sut.encrypt('any_id', '2h');
      expect(signSpy).toHaveBeenCalledWith({ sub: 'any_id' }, 'secret', { expiresIn: '2h' });
    });

    it('should return a token on sign success', async () => {
      const accessToken = await sut.encrypt('any_id');
      expect(accessToken).toBe('token');
    });

    it('should throw if sign throws', async () => {
      jest.spyOn(jwt, 'sign').mockImplementationOnce(throwError);
      const promise = sut.encrypt('any_id');
      await expect(promise).rejects.toThrow();
    });
  });
});
