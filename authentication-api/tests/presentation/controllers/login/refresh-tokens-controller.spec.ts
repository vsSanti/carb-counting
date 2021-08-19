import { RefreshTokensController } from '@/presentation/controllers/login';
import { badRequest } from '@/presentation/helpers/http/http-helper';
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

  it('should return 400 if ObjectValidator returns an error', async () => {
    objectValidatorSpy.response = { hasErrors: true, errors: { field: ['error'] } };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse).toEqual(badRequest({ validationErrors: { field: ['error'] } }));
  });
});
