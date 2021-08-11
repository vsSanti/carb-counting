import { getRepository } from 'typeorm';

import { LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { PgPatient } from '@/infra/db/pg/entities';

export class PgPatientRepository implements LoadPatientByEmailRepository {
  async loadByEmail(email: string): Promise<PatientModel> {
    const pgPatientRepository = getRepository(PgPatient);
    const pgPatient = await pgPatientRepository.findOne({ email });

    return pgPatient;
  }
}
