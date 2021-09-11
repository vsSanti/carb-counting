import { HttpRequest } from '@/common/presentation/protocols';
import { ListMealsController } from '@/meal/presentation/controllers/meal';

import { ListMealsSpy } from '@/tests/meal/presentation/mocks';

const mockRequest = (): HttpRequest => {
  return {
    queryStringParameters: {
      page: 1,
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
    expect(listMealsSpy.options).toEqual({ page: httpRequest.queryStringParameters.page });
  });
});
