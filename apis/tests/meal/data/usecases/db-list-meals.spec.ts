import { DbListMeals } from '@/meal/data/usecases/meal/db-list-meals';
import { ListMealsOptions } from '@/meal/domain/usecases';

import { throwError } from '@/tests/common/domain';
import { ListMealsRepositorySpy } from '@/tests/meal/data/mocks';

describe('DbListMeals Usecase', () => {
  let listMealsRepositorySpy: ListMealsRepositorySpy;
  let sut: DbListMeals;
  let listMealsOptions: ListMealsOptions;

  beforeEach(() => {
    listMealsRepositorySpy = new ListMealsRepositorySpy();
    sut = new DbListMeals(listMealsRepositorySpy);
    listMealsOptions = {
      page: 1,
    };
  });

  it('should call ListMealsRepository with correct options', async () => {
    await sut.list(listMealsOptions);
    expect(listMealsRepositorySpy.options).toEqual(listMealsOptions);
  });

  it('should throw if ListMealsRepository throws', async () => {
    jest.spyOn(listMealsRepositorySpy, 'listAll').mockImplementationOnce(throwError);
    const promise = sut.list(listMealsOptions);
    await expect(promise).rejects.toThrow();
  });

  it('should return an array of meals on success', async () => {
    const foodModels = await sut.list(listMealsOptions);
    expect(listMealsRepositorySpy.foodModels).toEqual(foodModels);
  });
});
