import { SignUpController } from '@/presentation/auth/controllers/login';
import { ParameterInUseError, ServerError } from '@/presentation/common/errors';
import { badRequest, conflict, created, serverError } from '@/presentation/common/helpers';
import { HttpRequest } from '@/presentation/common/protocols';

import { mockAddPatientParams, throwError } from '@/tests/domain/auth/mocks';
import { AddPatientSpy, GenerateTokensSpy } from '@/tests/presentation/auth/mocks';
import { ObjectValidatorSpy } from '@/tests/validations/mocks';

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
  let generateTokensSpy: GenerateTokensSpy;
  let sut: SignUpController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    addPatientSpy = new AddPatientSpy();
    generateTokensSpy = new GenerateTokensSpy();
    sut = new SignUpController(objectValidatorSpy, addPatientSpy, generateTokensSpy);
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
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should call GenerateTokens with correct values', async () => {
    await sut.handle(httpRequest);
    expect(generateTokensSpy.id).toEqual(addPatientSpy.patientModel.id);
  });

  it('should return 500 if GenerateTokens throws', async () => {
    jest.spyOn(generateTokensSpy, 'generate').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should return 201 if everything succeeds', async () => {
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(created({ data: generateTokensSpy.tokensModel }));
  });
});
