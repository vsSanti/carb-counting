import bcrypt from 'bcrypt';

import { Hasher } from '@/data/protocols/criptography';

export class BcryptAdapter implements Hasher {
  constructor(private readonly salt: number) {}

  async hash(plainText: string): Promise<string> {
    const hashedValue = await bcrypt.hash(plainText, this.salt);
    return hashedValue;
  }
}
