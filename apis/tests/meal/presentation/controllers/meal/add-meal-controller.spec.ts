import { HttpRequest } from '@/common/presentation/protocols';
import { AddMealController } from '@/meal/presentation/controllers/meal';

import { mockAddMealParams } from '@/tests/meal/domain/mocks';
import { ObjectValidatorSpy } from '@/tests/common/validations/mocks';

const mockRequest = (): HttpRequest => {
  return {
    body: mockAddMealParams(),
  };
};

describe('AddMeal Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let sut: AddMealController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    sut = new AddMealController(objectValidatorSpy);
    httpRequest = mockRequest();
  });

  it('should call ObjectValidator with correct params', async () => {
    await sut.handle(httpRequest);
    expect(objectValidatorSpy.params).toEqual({ input: httpRequest.body });
  });
});
