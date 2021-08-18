import { LoginController } from '@/presentation/controllers/login';
import { HttpRequest } from '@/presentation/protocols';

import { ObjectValidatorSpy } from '@/tests/validation/mocks';
import { mockAuthenticationParams } from '@/tests/domain/mocks';

const mockRequest = (): HttpRequest => {
  return {
    body: mockAuthenticationParams(),
  };
};

describe('Login Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let sut: LoginController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    sut = new LoginController(objectValidatorSpy);
    httpRequest = mockRequest();
  });

  it('should call ObjectValidator with correct params', async () => {
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest.body });
  });
});
