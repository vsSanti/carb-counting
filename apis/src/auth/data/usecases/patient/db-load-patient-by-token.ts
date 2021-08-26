import { Decrypter } from '@/auth/data/protocols/criptography';
import { LoadPatientByIdRepository } from '@/auth/data/protocols/db';
import { PatientModel } from '@/auth/domain/models';
import { LoadPatientByToken } from '@/auth/domain/usecases';

export class DbLoadPatientByToken implements LoadPatientByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly loadPatientByIdRepository: LoadPatientByIdRepository
  ) {}

  async load(token: string): Promise<PatientModel> {
    let id: string;
    try {
      id = await this.decrypter.decrypt(token);
      if (!id) return null;
    } catch (error) {
      console.error(error);
      return null;
    }

    const patient = await this.loadPatientByIdRepository.loadById(id);
    if (!patient) return null;

    return patient;
  }
}
