import faker from 'faker';

import { DbLoadMealById } from '@/meal/data/usecases/meal/db-load-meal-by-id';

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
});
