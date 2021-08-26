import { getRepository } from 'typeorm';

import {
  AddPatientRepository,
  LoadPatientByEmailRepository,
  LoadPatientByIdRepository,
} from '@/data/protocols/auth/db';
import { PatientModel } from '@/domain/models/auth';
import { PgPatient } from '@/infra/db/pg/entities';
import { AddPatientParams } from '@/domain/usecases/auth';

export class PgPatientRepository
  implements AddPatientRepository, LoadPatientByEmailRepository, LoadPatientByIdRepository
{
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

  async loadById(id: string): Promise<PatientModel> {
    const pgPatientRepository = getRepository(PgPatient);
    const pgPatient = await pgPatientRepository.findOne({ id });

    return pgPatient;
  }
}
