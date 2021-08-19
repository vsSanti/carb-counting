import { Decrypter } from '@/data/protocols/criptography';
import { LoadPatientByIdRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { LoadPatientByToken } from '@/domain/usecases';

export class DbLoadPatientByToken implements LoadPatientByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly loadPatientByIdRepository: LoadPatientByIdRepository
  ) {}

  async load(token: string): Promise<PatientModel> {
    let id: string;
    try {
      id = await this.decrypter.decrypt(token);
    } catch (error) {
      return null;
    }

    await this.loadPatientByIdRepository.loadById(id);

    return null;
  }
}
