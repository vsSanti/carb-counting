import { getRepository } from 'typeorm';

import { AddPatientRepository, LoadPatientByEmailRepository } from '@/data/protocols/db';
import { PatientModel } from '@/domain/models';
import { PgPatient } from '@/infra/db/pg/entities';
import { AddPatientParams } from '@/domain/usecases';

export class PgPatientRepository implements AddPatientRepository, LoadPatientByEmailRepository {
  async add(data: AddPatientParams): Promise<PatientModel> {
    const pgPatientRepository = getRepository(PgPatient);

    const pgPatient = await pgPatientRepository.save(data);
    delete pgPatient.password;

    return pgPatient;
  }

  async loadByEmail(email: string): Promise<PatientModel> {
    const pgPatientRepository = getRepository(PgPatient);
    const pgPatient = await pgPatientRepository.findOne({ email });

    return pgPatient;
  }
}
