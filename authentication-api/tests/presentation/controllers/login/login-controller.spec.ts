import { LoginController } from '@/presentation/controllers/login';
import { badRequest, unauthorized } from '@/presentation/helpers/http/http-helper';
import { HttpRequest } from '@/presentation/protocols';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { mockAuthenticationParams } from '@/tests/domain/mocks';
import { AuthenticationSpy } from '../../mocks';

const mockRequest = (): HttpRequest => {
  return {
    body: mockAuthenticationParams(),
  };
};

describe('Login Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let authenticationSpy: AuthenticationSpy;
  let sut: LoginController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    authenticationSpy = new AuthenticationSpy();
    sut = new LoginController(objectValidatorSpy, authenticationSpy);
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
    authenticationSpy.isAuthorized = false;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(unauthorized());
  });
});
