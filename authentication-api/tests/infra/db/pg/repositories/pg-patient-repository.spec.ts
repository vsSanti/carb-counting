import { IBackup } from 'pg-mem';
import { getRepository, Repository, getConnection } from 'typeorm';

import { AddPatientParams } from '@/domain/usecases';
import { PgPatientRepository } from '@/infra/db/pg/repositories';
import { PgPatient } from '@/infra/db/pg/entities';

import { mockAddPatientParams } from '@/tests/domain/mocks';
import { makeFakeDb } from '@/tests/infra/db/pg/mocks';

describe('PgUserAccountRepository', () => {
  let sut: PgPatientRepository;
  let pgPatientRepo: Repository<PgPatient>;
  let addPatientParams: AddPatientParams;
  let backup: IBackup;

  beforeAll(async () => {
    const db = await makeFakeDb();
    backup = db.backup();
    pgPatientRepo = getRepository(PgPatient);
  });

  afterAll(async () => {
    await getConnection().close();
  });

  beforeEach(() => {
    backup.restore();
    sut = new PgPatientRepository();
    addPatientParams = mockAddPatientParams();
  });

  describe('load', () => {
    it('should return a patient if email is already registered', async () => {
      await pgPatientRepo.save(addPatientParams);

      const patient = await sut.loadByEmail(addPatientParams.email);

      expect(patient).toEqual(addPatientParams);
    });

    it("should return null if email isn't already registered", async () => {
      const patient = await sut.loadByEmail(addPatientParams.email);
      expect(patient).toBeUndefined();
    });
  });

  describe('add', () => {
    it('should return a patient on add success', async () => {
      const patient = await sut.add(addPatientParams);

      expect(patient).toBeTruthy();
      expect(patient.id).toBeTruthy();
      expect(patient.createdAt).toBeTruthy();
      expect(patient.updatedAt).toBeTruthy();
      expect(patient.deletedAt).toBeFalsy();

      expect(patient).toEqual(addPatientParams);
    });
  });
});
