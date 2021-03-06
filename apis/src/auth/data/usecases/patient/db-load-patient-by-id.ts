import { LoadPatientByIdRepository } from '@/auth/data/protocols/db';
import { PatientModel } from '@/auth/domain/models';
import { LoadPatientById } from '@/auth/domain/usecases';

export class DbLoadPatientById implements LoadPatientById {
  constructor(private readonly loadPatientByIdRepository: LoadPatientByIdRepository) {}

  async load(id: string): Promise<PatientModel> {
    const patient = await this.loadPatientByIdRepository.loadById(id);
    if (!patient) return null;

    return patient;
  }
}
