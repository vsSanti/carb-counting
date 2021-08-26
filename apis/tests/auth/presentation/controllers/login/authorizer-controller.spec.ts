import faker from 'faker';

import { AuthorizerController } from '@/auth/presentation/controllers/login';
import { HttpRequest } from '@/common/presentation/protocols';

import { throwError } from '@/tests/common/domain';
import { LoadPatientByTokenSpy } from '@/tests/auth/presentation/mocks';

const mockRequest = (accessToken): HttpRequest => {
  return {
    authorizationToken: `Bearer ${accessToken}`,
    authorizationArn: 'ARN',
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

  it('should throw if no patient is found on LoadPatientByToken', async () => {
    loadPatientByTokenSpy.patientModel = null;
    const promise = sut.handle(authorizationRequest);
    await expect(promise).rejects.toThrow();
  });

  it('should throw if LoadPatientByToken throws', async () => {
    jest.spyOn(loadPatientByTokenSpy, 'load').mockImplementationOnce(throwError);
    const promise = sut.handle(authorizationRequest);
    await expect(promise).rejects.toThrow();
  });

  it('should return policies and patient id', async () => {
    const response = await sut.handle(authorizationRequest);
    expect(response).toHaveProperty('principalId');
    expect(response.principalId).toBe(loadPatientByTokenSpy.patientModel.id);
    expect(response).toHaveProperty('policyDocument');
    expect(response.policyDocument.Statement[0].Action).toBe('execute-api:Invoke');
  });
});
