import { SignUpController } from '@/presentation/controllers/login';
import { badRequest, created, serverError } from '@/presentation/helpers/http/http-helper';
import { HttpRequest } from '@/presentation/protocols';
import { conflict } from '@/presentation/helpers/http/http-helper';
import { ParameterInUseError } from '@/presentation/errors';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { mockAddPatientParams, throwError } from '@/tests/domain/mocks';
import { AddPatientSpy, AuthenticationSpy } from '@/tests/presentation/mocks';

const mockRequest = (): HttpRequest => {
  const params = mockAddPatientParams();
  return {
    body: {
      ...params,
      confirmPassword: params.password,
    },
  };
};

describe('SignUp Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let addPatientSpy: AddPatientSpy;
  let authenticationSpy: AuthenticationSpy;
  let sut: SignUpController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    addPatientSpy = new AddPatientSpy();
    authenticationSpy = new AuthenticationSpy();
    sut = new SignUpController(objectValidatorSpy, addPatientSpy, authenticationSpy);
    httpRequest = mockRequest();
  });

  it('should call ObjectValidator with correct params', async () => {
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest.body });
  });

  it('should return 400 if ObjectValidator returns an error', async () => {
    objectValidatorSpy.response = { hasErrors: true, errors: { field: ['error'] } };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse).toEqual(badRequest({ validationErrors: { field: ['error'] } }));
  });

  it('should call AddPatient with correct params', async () => {
    await sut.handle(httpRequest);
    delete httpRequest.body.confirmPassword;
    expect(addPatientSpy.addPatientParams).toEqual(httpRequest.body);
  });

  it('should return 409 if AddPatient returns null', async () => {
    addPatientSpy.patientModel = null;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(409);
    expect(httpResponse).toEqual(conflict(new ParameterInUseError('email')));
  });

  it('should return 500 if AddPatient throws', async () => {
    jest.spyOn(addPatientSpy, 'add').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  it('should call Authentication with correct values', async () => {
    await sut.handle(httpRequest);
    expect(authenticationSpy.params).toEqual({
      email: httpRequest.body.email,
      password: httpRequest.body.password,
    });
  });

  it('should return 201 if everything succeeds', async () => {
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(created({}));
  });
});
