import faker from 'faker';

import { PatientsMeController } from '@/auth/presentation/controllers/patient';
import { ServerError } from '@/common/presentation/errors';
import { ok, serverError, unauthorized } from '@/common/presentation/helpers';
import { HttpRequest } from '@/common/presentation/protocols';

import { throwError } from '@/tests/common/domain';
import { LoadPatientByIdSpy } from '@/tests/auth/presentation/mocks';

const mockRequest = (patientId: string): HttpRequest => {
  return { patientId };
};

describe('PatientsMe Controller', () => {
  let loadPatientByIdSpy: LoadPatientByIdSpy;
  let sut: PatientsMeController;
  let httpRequest: HttpRequest;
  let patientId: string;

  beforeEach(() => {
    loadPatientByIdSpy = new LoadPatientByIdSpy();
    sut = new PatientsMeController(loadPatientByIdSpy);
    patientId = faker.datatype.uuid();
    httpRequest = mockRequest(patientId);
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

  it('should return 500 if LoadPatientById throws', async () => {
    jest.spyOn(loadPatientByIdSpy, 'load').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should return 200 if everything succeeds', async () => {
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(ok({ data: loadPatientByIdSpy.patientModel }));
    expect(httpResponse.body.data.password).toBeFalsy();
  });
});
