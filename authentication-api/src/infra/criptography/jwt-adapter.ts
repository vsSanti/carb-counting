import jwt from 'jsonwebtoken';

import { Encrypter } from '@/data/protocols/criptography';

export class JwtAdapter implements Encrypter {
  constructor(private readonly secret: string, private readonly expiresIn: string = '1h') {}

  async encrypt(plainText: string): Promise<string> {
    const payload = { sub: plainText };
    const options = { expiresIn: this.expiresIn };
    const token = await jwt.sign(payload, this.secret, options);
    return token;
  }
}
