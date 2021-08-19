import { Decrypter } from '@/data/protocols/criptography';
import { PatientModel } from '@/domain/models';
import { LoadPatientByToken } from '@/domain/usecases';

export class DbLoadPatientByToken implements LoadPatientByToken {
  constructor(private readonly decrypter: Decrypter) {}

  async load(token: string): Promise<PatientModel> {
    try {
      await this.decrypter.decrypt(token);
    } catch (error) {
      return null;
    }

    return null;
  }
}
