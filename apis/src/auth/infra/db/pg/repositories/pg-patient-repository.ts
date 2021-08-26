import { getRepository } from 'typeorm';

import {
  AddPatientRepository,
  LoadPatientByEmailRepository,
  LoadPatientByIdRepository,
} from '@/auth/data/protocols/db';
import { PatientModel } from '@/auth/domain/models';
import { PgPatient } from '@/auth/infra/db/pg/entities';
import { AddPatientParams } from '@/auth/domain/usecases';

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
