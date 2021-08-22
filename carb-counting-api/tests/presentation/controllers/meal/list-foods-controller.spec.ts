import { ServerError, serverError } from 'presentation-common';

import { ListFoodsController } from '@/presentation/controllers/meal';

import { throwError } from '@/tests/domain/mocks';
import { ListFoodsSpy } from '@/tests/presentation/mocks';

describe('ListFoods Controller', () => {
  let listFoodsSpy: ListFoodsSpy;
  let sut: ListFoodsController;

  beforeEach(() => {
    listFoodsSpy = new ListFoodsSpy();
    sut = new ListFoodsController(listFoodsSpy);
  });

  it('should call ListFoods once', async () => {
    await sut.handle();
    expect(listFoodsSpy.timesCalled).toBe(1);
  });

  it('should return 500 if ListFoods throws', async () => {
    jest.spyOn(listFoodsSpy, 'list').mockImplementationOnce(throwError);
    const errorSpy = jest.spyOn(console, 'error');
    const httpResponse = await sut.handle();
    expect(httpResponse).toEqual(serverError(new ServerError()));
    expect(errorSpy).toHaveBeenCalled();
  });
});
