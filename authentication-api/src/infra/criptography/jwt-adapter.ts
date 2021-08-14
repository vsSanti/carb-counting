import jwt from 'jsonwebtoken';

import { Encrypter } from '@/data/protocols/criptography';

export class JwtAdapter implements Encrypter {
  constructor(private readonly secret: string) {}

  async encrypt(plainText: string, expiresIn = '1h'): Promise<string> {
    const payload = { sub: plainText };
    const options = { expiresIn };
    const token = await jwt.sign(payload, this.secret, options);
    return token;
  }
}
