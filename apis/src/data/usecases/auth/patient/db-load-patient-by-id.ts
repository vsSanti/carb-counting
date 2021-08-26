import { LoadPatientByIdRepository } from '@/data/protocols/auth/db';
import { PatientModel } from '@/domain/models/auth';
import { LoadPatientById } from '@/domain/usecases/auth';

export class DbLoadPatientById implements LoadPatientById {
  constructor(private readonly loadPatientByIdRepository: LoadPatientByIdRepository) {}

  async load(id: string): Promise<PatientModel> {
    const patient = await this.loadPatientByIdRepository.loadById(id);
    if (!patient) return null;

    return patient;
  }
}
