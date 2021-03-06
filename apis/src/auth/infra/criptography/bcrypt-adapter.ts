import bcrypt from 'bcrypt';

import { HashComparer, Hasher } from '@/auth/data/protocols/criptography';

export class BcryptAdapter implements HashComparer, Hasher {
  constructor(private readonly salt: number) {}

  async compare(plainText: string, digest: string): Promise<boolean> {
    const isValid = await bcrypt.compare(plainText, digest);
    return isValid;
  }

  async hash(plainText: string): Promise<string> {
    const hashedValue = await bcrypt.hash(plainText, this.salt);
    return hashedValue;
  }
}
