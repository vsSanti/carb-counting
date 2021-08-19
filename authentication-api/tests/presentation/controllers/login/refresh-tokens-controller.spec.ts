import { RefreshTokensController } from '@/presentation/controllers/login';
import { ServerError } from '@/presentation/errors';
import { badRequest, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { HttpRequest } from '@/presentation/protocols';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { mockTokensModel, throwError } from '@/tests/domain/mocks';
import { LoadPatientByTokenSpy } from '@/tests/presentation/mocks';

const mockRequest = (): HttpRequest => {
  const { refreshToken } = mockTokensModel();
  return {
    body: { refreshToken },
  };
};

describe('RefreshTokens Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let loadPatientByTokenSpy: LoadPatientByTokenSpy;
  let sut: RefreshTokensController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    loadPatientByTokenSpy = new LoadPatientByTokenSpy();
    sut = new RefreshTokensController(objectValidatorSpy, loadPatientByTokenSpy);
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
});
