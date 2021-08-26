import { Decrypter } from '@/data/auth/protocols/criptography';
import { LoadPatientByIdRepository } from '@/data/auth/protocols/db';
import { PatientModel } from '@/domain/auth/models';
import { LoadPatientByToken } from '@/domain/auth/usecases';

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