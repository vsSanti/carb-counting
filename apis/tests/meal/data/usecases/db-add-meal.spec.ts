import { DbAddMeal } from '@/meal/data/usecases/meal/db-add-meal';
import { AddMealParams } from '@/meal/domain/usecases';

import { throwError } from '@/tests/common/domain';
import { AddMealRepositorySpy } from '@/tests/meal/data/mocks';
import { mockAddMealParams } from '@/tests/meal/domain/mocks';

describe('DbAddMeal Usecase', () => {
  let addMealRepositorySpy: AddMealRepositorySpy;
  let sut: DbAddMeal;
  let addMealParams: AddMealParams;

  beforeEach(() => {
    addMealRepositorySpy = new AddMealRepositorySpy();
    sut = new DbAddMeal(addMealRepositorySpy);
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
});
