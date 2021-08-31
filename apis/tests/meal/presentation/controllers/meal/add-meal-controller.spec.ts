import { badRequest } from '@/common/presentation/helpers';
import { HttpRequest } from '@/common/presentation/protocols';
import { AddMealController } from '@/meal/presentation/controllers/meal';

import { mockAddMealParams } from '@/tests/meal/domain/mocks';
import { ObjectValidatorSpy } from '@/tests/common/validations/mocks';
import { AddMealSpy } from '@/tests/meal/presentation/mocks';

const mockRequest = (): HttpRequest => {
  return {
    body: mockAddMealParams(),
  };
};

describe('AddMeal Controller', () => {
  let objectValidatorSpy: ObjectValidatorSpy;
  let addMealSpy: AddMealSpy;
  let sut: AddMealController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    objectValidatorSpy = new ObjectValidatorSpy();
    addMealSpy = new AddMealSpy();
    sut = new AddMealController(objectValidatorSpy, addMealSpy);
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

  it('should call AddMeal with correct params', async () => {
    await sut.handle(httpRequest);
    expect(addMealSpy.params).toEqual(httpRequest.body);
  });
});
