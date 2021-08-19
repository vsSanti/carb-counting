import jwt from 'jsonwebtoken';

import { Decrypter, Encrypter } from '@/data/protocols/criptography';

export class JwtAdapter implements Decrypter, Encrypter {
  constructor(private readonly secret: string) {}

  async decrypt(cipherText: string): Promise<string> {
    await jwt.verify(cipherText, this.secret);
    return;
  }

  async encrypt(plainText: string, expiresIn = '1h'): Promise<string> {
    const payload = { sub: plainText };
    const options = { expiresIn };
    const token = await jwt.sign(payload, this.secret, options);
    return token;
  }
}
