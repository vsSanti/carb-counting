import { DbListFoods } from '@/data/usecases/meal/db-list-foods';
import { ListFoodsRepositorySpy } from '@/tests/data/mocks';

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
});
