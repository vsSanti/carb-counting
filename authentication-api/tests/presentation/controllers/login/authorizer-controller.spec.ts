import { AuthorizerController } from '@/presentation/controllers/login';
import { HttpRequest } from '@/presentation/protocols';

const mockRequest = (): HttpRequest => {
  return {
    authorizationToken: 'Bearer accessToken',
  };
};

describe('Authorizer Controller', () => {
  let sut: AuthorizerController;
  let authorizationRequest: HttpRequest;

  beforeEach(() => {
    sut = new AuthorizerController();
    authorizationRequest = mockRequest();
  });

  it("should throw if there's no authorizationToken", async () => {
    const promise = sut.handle(authorizationRequest);
    await expect(promise).rejects.toThrow();
  });

  it("should throw if authorizationToken doesn't start with 'Bearer '", async () => {
    const promise = sut.handle({ authorizationToken: 'accessToken' });
    await expect(promise).rejects.toThrow();
  });
});
