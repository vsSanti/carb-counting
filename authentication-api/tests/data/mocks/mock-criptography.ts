import faker from 'faker';

import { Hasher } from '@/data/protocols/criptography';

export class HasherSpy implements Hasher {
  digest = faker.datatype.uuid();
  plainText: string;

  async hash(plainText: string): Promise<string> {
    this.plainText = plainText;
    return Promise.resolve(this.digest);
  }
}
