import faker from 'faker';

import { PatientsMeController } from '@/presentation/controllers/patient';
import { unauthorized } from '@/presentation/helpers/http/http-helper';
import { HttpRequest } from '@/presentation/protocols';

import { LoadPatientByIdSpy } from '@/tests/presentation/mocks';

const mockRequest = (patientId): HttpRequest => {
  return { patientId };
};

describe('PatientsMe Controller', () => {
  let loadPatientByIdSpy: LoadPatientByIdSpy;
  let sut: PatientsMeController;
  let httpRequest: HttpRequest;
  let id: string;

  beforeEach(() => {
    loadPatientByIdSpy = new LoadPatientByIdSpy();
    sut = new PatientsMeController(loadPatientByIdSpy);
    id = faker.datatype.uuid();
    httpRequest = mockRequest(id);
  });

  it('should call LoadPatientById with correct value', async () => {
    await sut.handle(httpRequest);
    expect(loadPatientByIdSpy.id).toEqual(httpRequest.patientId);
  });

  it('should return 401 if no patient is found on LoadPatientById', async () => {
    loadPatientByIdSpy.patientModel = null;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(unauthorized());
  });
});
