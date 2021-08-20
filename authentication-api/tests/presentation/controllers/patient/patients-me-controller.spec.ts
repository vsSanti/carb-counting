import faker from 'faker';

import { PatientsMeController } from '@/presentation/controllers/patient';
import { ServerError } from '@/presentation/errors';
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { HttpRequest } from '@/presentation/protocols';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { throwError } from '@/tests/domain/mocks';
import { LoadPatientByIdSpy } from '@/tests/presentation/mocks';

const mockRequest = (patientId: string): HttpRequest => {
  return { patientId };
};

describe('PatientsMe Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let loadPatientByIdSpy: LoadPatientByIdSpy;
  let sut: PatientsMeController;
  let httpRequest: HttpRequest;
  let patientId: string;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    loadPatientByIdSpy = new LoadPatientByIdSpy();
    sut = new PatientsMeController(objectValidatorSpy, loadPatientByIdSpy);
    patientId = faker.datatype.uuid();
    httpRequest = mockRequest(patientId);
  });

  it('should call ObjectValidator with correct params', async () => {
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest });
  });

  it('should return 400 if ObjectValidator returns an error', async () => {
    objectValidatorSpy.response = { hasErrors: true, errors: { field: ['error'] } };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse).toEqual(badRequest({ validationErrors: { field: ['error'] } }));
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
