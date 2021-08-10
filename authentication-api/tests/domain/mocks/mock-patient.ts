import faker from 'faker';

import { PatientModel } from '@/domain/models';
import { AddPatientParams } from '@/domain/usecases';

export const mockAddPatientParams = (): AddPatientParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  name: faker.name.findName(),
  sex: faker.random.arrayElement(['masculine', 'feminine']),
  height: faker.datatype.number({ min: 150, max: 220 }),
  glycemicTarget: faker.datatype.number({ min: 100, max: 300 }),
  insulinUnitsPerDay: faker.datatype.number({ min: 50, max: 200 }),
  weight: faker.datatype.number({ min: 40, max: 200 }),
  birthDate: new Date(),
});

export const mockPatientModel = (): PatientModel => ({
  ...mockAddPatientParams(),
  id: faker.datatype.uuid(),
  createdAt: new Date(),
});
