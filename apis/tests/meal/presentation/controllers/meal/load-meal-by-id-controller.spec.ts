import faker from 'faker';

import { notFound, serverError } from '@/common/presentation/helpers';
import { HttpRequest } from '@/common/presentation/protocols';
import { LoadMealByIdController } from '@/meal/presentation/controllers/meal';

import { throwError } from '@/tests/common/domain';
import { ServerError } from '@/common/presentation/errors';
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

  it('should return 404 if LoadMealById returns falsy', async () => {
    loadMealByIdSpy.mealModel = undefined;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(notFound('meal'));
  });

  it('should return 500 if LoadMealById throws', async () => {
    jest.spyOn(loadMealByIdSpy, 'load').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });
});
