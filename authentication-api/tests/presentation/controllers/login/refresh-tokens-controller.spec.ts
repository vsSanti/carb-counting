import { RefreshTokensController } from '@/presentation/controllers/login';
import { HttpRequest } from '@/presentation/protocols';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { mockTokensModel } from '@/tests/domain/mocks';

const mockRequest = (): HttpRequest => {
  const { refreshToken } = mockTokensModel();
  return {
    body: { refreshToken },
  };
};

describe('RefreshTokens Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let sut: RefreshTokensController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    sut = new RefreshTokensController(objectValidatorSpy);
    httpRequest = mockRequest();
  });

  it('should call ObjectValidator with correct params', async () => {
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest.body });
  });
});
