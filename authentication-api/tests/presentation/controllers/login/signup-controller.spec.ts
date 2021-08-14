import { SignUpController } from '@/presentation/controllers/login';
import { HttpRequest } from '@/presentation/protocols';

import { mockAddPatientParams } from '@/tests/domain/mocks';
import { ObjectValidatorSpy } from '@/tests/validation/mocks';

const mockRequest = (): HttpRequest => {
  const params = mockAddPatientParams();
  return {
    body: {
      ...params,
      confirmPassword: params.password,
    },
  };
};

describe('SignUp Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let sut: SignUpController;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    sut = new SignUpController(objectValidatorSpy);
  });

  it('should call ObjectValidator with correct params', async () => {
    const httpRequest = mockRequest();
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest.body });
  });
});
