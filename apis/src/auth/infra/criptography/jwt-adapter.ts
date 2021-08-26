import jwt from 'jsonwebtoken';

import { Decrypter, Encrypter } from '@/auth/data/protocols/criptography';

export class JwtAdapter implements Decrypter, Encrypter {
  constructor(private readonly secret: string) {}

  async decrypt(cipherText: string): Promise<string> {
    const { sub } = await jwt.verify(cipherText, this.secret);
    return sub as string;
  }

  async encrypt(plainText: string, expiresIn = '1h'): Promise<string> {
    const payload = { sub: plainText };
    const options = { expiresIn };
    const token = await jwt.sign(payload, this.secret, options);
    return token;
  }
}
