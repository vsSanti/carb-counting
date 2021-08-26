import { RefreshTokensController } from '@/presentation/auth/controllers/login';
import { ServerError } from '@/presentation/common/errors';
import { badRequest, ok, serverError, unauthorized } from '@/presentation/common/helpers';
import { HttpRequest } from '@/presentation/common/protocols';

import { throwError } from '@/tests/domain/common';
import { mockTokensModel } from '@/tests/domain/auth/mocks';
import { GenerateTokensSpy, LoadPatientByTokenSpy } from '@/tests/presentation/auth/mocks';
import { ObjectValidatorSpy } from '@/tests/validations/mocks';

const mockRequest = (): HttpRequest => {
  const { refreshToken } = mockTokensModel();
  return {
    body: { refreshToken },
  };
};

describe('RefreshTokens Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let loadPatientByTokenSpy: LoadPatientByTokenSpy;
  let generateTokensSpy: GenerateTokensSpy;
  let sut: RefreshTokensController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    loadPatientByTokenSpy = new LoadPatientByTokenSpy();
    generateTokensSpy = new GenerateTokensSpy();
    sut = new RefreshTokensController(objectValidatorSpy, loadPatientByTokenSpy, generateTokensSpy);
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

  it('should call LoadPatientByToken with correct value', async () => {
    await sut.handle(httpRequest);
    expect(loadPatientByTokenSpy.token).toEqual(httpRequest.body.refreshToken);
  });

  it('should return 401 if no patient is found on LoadPatientByToken', async () => {
    loadPatientByTokenSpy.patientModel = null;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(unauthorized());
  });

  it('should return 500 if LoadPatientByToken throws', async () => {
    jest.spyOn(loadPatientByTokenSpy, 'load').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should call GenerateTokens with correct values', async () => {
    await sut.handle(httpRequest);
    expect(generateTokensSpy.id).toEqual(loadPatientByTokenSpy.patientModel.id);
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
