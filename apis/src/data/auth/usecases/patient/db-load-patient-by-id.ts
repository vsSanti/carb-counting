import { LoadPatientByIdRepository } from '@/data/auth/protocols/db';
import { PatientModel } from '@/domain/auth/models';
import { LoadPatientById } from '@/domain/auth/usecases';

export class DbLoadPatientById implements LoadPatientById {
  constructor(private readonly loadPatientByIdRepository: LoadPatientByIdRepository) {}

  async load(id: string): Promise<PatientModel> {
    const patient = await this.loadPatientByIdRepository.loadById(id);
    if (!patient) return null;

    return patient;
  }
}
