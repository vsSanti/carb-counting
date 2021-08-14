import faker from 'faker';

import { HashComparer, Hasher } from '@/data/protocols/criptography';

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
