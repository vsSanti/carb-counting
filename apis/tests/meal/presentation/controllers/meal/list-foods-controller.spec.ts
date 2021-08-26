import { ServerError } from '@/common/presentation/errors';
import { ok, serverError } from '@/common/presentation/helpers';
import { ListFoodsController } from '@/meal/presentation/controllers/meal';

import { throwError } from '@/tests/common/domain';
import { ListFoodsSpy } from '@/tests/meal/presentation/mocks';

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

  it('should return 200 if everything succeeds', async () => {
    const httpResponse = await sut.handle();
    const expectedDocs = listFoodsSpy.foodModels.map((food) => ({
      id: food.id,
      group: food.group,
      description: food.description,
    }));

    expect(httpResponse).toEqual(ok({ docs: expectedDocs }));
  });
});
