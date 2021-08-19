import faker from 'faker';

import { AuthorizerController } from '@/presentation/controllers/login';
import { HttpRequest } from '@/presentation/protocols';

import { LoadPatientByTokenSpy } from '@/tests/presentation/mocks';

const mockRequest = (accessToken): HttpRequest => {
  return {
    authorizationToken: `Bearer ${accessToken}`,
  };
};

describe('Authorizer Controller', () => {
  let loadPatientByTokenSpy: LoadPatientByTokenSpy;
  let sut: AuthorizerController;
  let accessToken: string;
  let authorizationRequest: HttpRequest;

  beforeEach(() => {
    loadPatientByTokenSpy = new LoadPatientByTokenSpy();
    sut = new AuthorizerController(loadPatientByTokenSpy);
    accessToken = faker.datatype.uuid();
    authorizationRequest = mockRequest(accessToken);
  });

  it("should throw if there's no authorizationToken", async () => {
    const promise = sut.handle({});
    await expect(promise).rejects.toThrow();
  });

  it("should throw if authorizationToken doesn't start with 'Bearer '", async () => {
    const promise = sut.handle({ authorizationToken: 'accessToken' });
    await expect(promise).rejects.toThrow();
  });

  it('should throw if authorizationToken is empty', async () => {
    const promise = sut.handle({ authorizationToken: 'Bearer ' });
    await expect(promise).rejects.toThrow();
  });

  it('should call LoadPatientByToken with correct value', async () => {
    await sut.handle(authorizationRequest);
    expect(loadPatientByTokenSpy.token).toEqual(accessToken);
  });
});
