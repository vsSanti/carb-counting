import { DbAddMeal } from '@/meal/data/usecases/meal/db-add-meal';
import { AddMealParams } from '@/meal/domain/usecases';

import { throwError } from '@/tests/common/domain';
import { AddMealRepositorySpy, LoadMealByIdRepositorySpy } from '@/tests/meal/data/mocks';
import { mockAddMealParams } from '@/tests/meal/domain/mocks';

describe('DbAddMeal Usecase', () => {
  let addMealRepositorySpy: AddMealRepositorySpy;
  let loadMealByIdRepositorySpy: LoadMealByIdRepositorySpy;
  let sut: DbAddMeal;
  let addMealParams: AddMealParams;

  beforeEach(() => {
    addMealRepositorySpy = new AddMealRepositorySpy();
    loadMealByIdRepositorySpy = new LoadMealByIdRepositorySpy();
    sut = new DbAddMeal(addMealRepositorySpy, loadMealByIdRepositorySpy);
    addMealParams = mockAddMealParams();
  });

  it('should call AddMealRepository with correct params', async () => {
    await sut.add(addMealParams);
    expect(addMealRepositorySpy.params).toEqual(addMealParams);
  });

  it('should throw if AddMealRepository throws', async () => {
    jest.spyOn(addMealRepositorySpy, 'add').mockImplementationOnce(throwError);
    const errorPromise = sut.add(addMealParams);
    await expect(errorPromise).rejects.toThrow();
  });

  it('should call LoadMealByIdRepository with correct id', async () => {
    await sut.add(addMealParams);
    expect(loadMealByIdRepositorySpy.id).toEqual(addMealRepositorySpy.mealId);
  });
});
