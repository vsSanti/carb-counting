import { LoginController } from '@/presentation/controllers/login';
import { ServerError } from '@/presentation/errors';
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers';
import { HttpRequest } from '@/presentation/protocols';

import { mockAuthenticationParams, throwError } from '@/tests/domain/mocks';
import { AuthenticationSpy, GenerateTokensSpy } from '@/tests/presentation/mocks';
import { ObjectValidatorSpy } from '@/tests/validations/mocks';

const mockRequest = (): HttpRequest => {
  return {
    body: mockAuthenticationParams(),
  };
};

describe('Login Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let authenticationSpy: AuthenticationSpy;
  let generateTokensSpy: GenerateTokensSpy;
  let sut: LoginController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    authenticationSpy = new AuthenticationSpy();
    generateTokensSpy = new GenerateTokensSpy();
    sut = new LoginController(objectValidatorSpy, authenticationSpy, generateTokensSpy);
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

  it('should call Authentication with correct params', async () => {
    await sut.handle(httpRequest);
    expect(authenticationSpy.params).toEqual(httpRequest.body);
  });

  it('should return 401 if invalid credentials are provided', async () => {
    authenticationSpy.patientModel = null;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(unauthorized());
  });

  it('should return 500 if Authentication throws', async () => {
    jest.spyOn(authenticationSpy, 'auth').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should call GenerateTokens with correct values', async () => {
    await sut.handle(httpRequest);
    expect(generateTokensSpy.id).toEqual(authenticationSpy.patientModel.id);
  });

  it('should return 500 if GenerateTokens throws', async () => {
    jest.spyOn(generateTokensSpy, 'generate').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should return 200 if everything succeeds', async () => {
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(ok({ data: generateTokensSpy.tokensModel }));
  });
});
