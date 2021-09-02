import faker from 'faker';

import { HttpRequest } from '@/common/presentation/protocols';
import { LoadMealByIdController } from '@/meal/presentation/controllers/meal';

import { LoadMealByIdSpy } from '@/tests/meal/presentation/mocks';

const mockRequest = (): HttpRequest => {
  return {
    pathParameters: { mealId: faker.datatype.uuid() },
  };
};

describe('LoadMealById Controller', () => {
  let loadMealByIdSpy: LoadMealByIdSpy;
  let sut: LoadMealByIdController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    loadMealByIdSpy = new LoadMealByIdSpy();
    sut = new LoadMealByIdController(loadMealByIdSpy);
    httpRequest = mockRequest();
  });

  it('should call LoadMealById with correct params', async () => {
    await sut.handle(httpRequest);
    expect(loadMealByIdSpy.id).toEqual(httpRequest.pathParameters.mealId);
  });
});
