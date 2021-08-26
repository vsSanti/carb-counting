import { DbListFoods } from '@/meal/data/usecases/meal/db-list-foods';

import { throwError } from '@/tests/common/domain';
import { ListFoodsRepositorySpy } from '@/tests/meal/data/mocks';

describe('DbListFoods Usecase', () => {
  let listFoodsRepositorySpy: ListFoodsRepositorySpy;
  let sut: DbListFoods;

  beforeEach(() => {
    listFoodsRepositorySpy = new ListFoodsRepositorySpy();
    sut = new DbListFoods(listFoodsRepositorySpy);
  });

  it('should call ListFoodsRepository once', async () => {
    await sut.list();
    expect(listFoodsRepositorySpy.timesCalled).toBe(1);
  });

  it('should throw if ListFoodsRepository throws', async () => {
    jest.spyOn(listFoodsRepositorySpy, 'listAll').mockImplementationOnce(throwError);
    const promise = sut.list();
    await expect(promise).rejects.toThrow();
  });

  it('should return an array of foods on success', async () => {
    const foodModels = await sut.list();
    expect(listFoodsRepositorySpy.foodModels).toEqual(foodModels);
  });
});
