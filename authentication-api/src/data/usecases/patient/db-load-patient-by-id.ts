import { LoadPatientByIdRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { LoadPatientById } from '@/domain/usecases';

export class DbLoadPatientById implements LoadPatientById {
  constructor(private readonly loadPatientByIdRepository: LoadPatientByIdRepository) {}

  async load(id: string): Promise<PatientModel> {
    await this.loadPatientByIdRepository.loadById(id);
    return null;
  }
}
