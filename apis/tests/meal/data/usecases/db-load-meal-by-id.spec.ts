import faker from 'faker';

import { DbLoadMealById } from '@/meal/data/usecases/meal/db-load-meal-by-id';

import { throwError } from '@/tests/common/domain';
import { LoadMealByIdRepositorySpy } from '@/tests/meal/data/mocks';

describe('DbLoadMealById Usecase', () => {
  let loadMealByIdRepositorySpy: LoadMealByIdRepositorySpy;
  let sut: DbLoadMealById;
  let id: string;

  beforeEach(() => {
    loadMealByIdRepositorySpy = new LoadMealByIdRepositorySpy();
    sut = new DbLoadMealById(loadMealByIdRepositorySpy);
    id = faker.datatype.uuid();
  });

  it('should call LoadMealByIdRepository with correct id', async () => {
    await sut.load(id);
    expect(loadMealByIdRepositorySpy.id).toEqual(id);
  });

  it('should return null if LoadMealByIdRepository returns falsy', async () => {
    loadMealByIdRepositorySpy.mealModel = null;
    const meal = await sut.load(id);
    expect(meal).toBeNull();
  });

  it('should throw if LoadMealByIdRepository throws', async () => {
    jest.spyOn(loadMealByIdRepositorySpy, 'loadById').mockImplementationOnce(throwError);
    const errorPromise = sut.load(id);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should return a meal on success', async () => {
    const meal = await sut.load(id);
    expect(meal).toEqual(loadMealByIdRepositorySpy.mealModel);
  });
});
