import { DbListMeals } from '@/meal/data/usecases/meal/db-list-meals';
import { ListMealsOptions } from '@/meal/domain/usecases';

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
});
