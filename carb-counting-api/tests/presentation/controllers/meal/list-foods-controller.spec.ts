import { ListFoodsController } from '@/presentation/controllers/meal';

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
});
