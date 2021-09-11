import faker from 'faker';

import { ServerError } from '@/common/presentation/errors';
import { ok, serverError } from '@/common/presentation/helpers';
import { HttpRequest } from '@/common/presentation/protocols';
import { ListMealsController } from '@/meal/presentation/controllers/meal';

import { throwError } from '@/tests/common/domain';
import { ListMealsSpy } from '@/tests/meal/presentation/mocks';

const mockRequest = (): HttpRequest => {
  return {
    patientId: faker.datatype.uuid(),
    queryStringParameters: {
      page: faker.datatype.number(),
    },
  };
};

describe('ListMeals Controller', () => {
  let listMealsSpy: ListMealsSpy;
  let sut: ListMealsController;
  let httpRequest: HttpRequest;

  beforeEach(() => {
    listMealsSpy = new ListMealsSpy();
    sut = new ListMealsController(listMealsSpy);
    httpRequest = mockRequest();
  });

  it('should call ListMeals with correct params', async () => {
    await sut.handle(httpRequest);
    expect(listMealsSpy.options).toEqual({
      page: httpRequest.queryStringParameters.page,
      patientId: httpRequest.patientId,
    });
  });

  it('should return 500 if ListFoods throws', async () => {
    jest.spyOn(listMealsSpy, 'list').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });

  it('should return 200 if everything succeeds', async () => {
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(ok({ docs: listMealsSpy.mealModels }));
  });
});
