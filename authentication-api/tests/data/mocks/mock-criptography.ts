import faker from 'faker';

import { Encrypter, HashComparer, Hasher } from '@/data/protocols/criptography';

export class EncrypterSpy implements Encrypter {
  cipherText = faker.datatype.uuid();
  plainText: string;
  expiresIn: string[] = [];
  calledTimes = 0;

  async encrypt(plainText: string, expiresIn?: string): Promise<string> {
    this.calledTimes += 1;
    this.plainText = plainText;
    this.expiresIn.push(expiresIn);
    return this.cipherText;
  }
}

export class HashComparerSpy implements HashComparer {
  isValid = true;
  plainText: string;
  digest: string;

  async compare(plainText: string, digest: string): Promise<boolean> {
    this.plainText = plainText;
    this.digest = digest;
    return Promise.resolve(this.isValid);
  }
}

export class HasherSpy implements Hasher {
  digest = faker.datatype.uuid();
  plainText: string;

  async hash(plainText: string): Promise<string> {
    this.plainText = plainText;
    return Promise.resolve(this.digest);
  }
}
