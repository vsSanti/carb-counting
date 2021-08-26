import { ListFoods } from '@/domain/meal/usecases';
import { ok, serverError } from '@/presentation/common/helpers';
import { Controller, HttpResponse } from '@/presentation/common/protocols';

export class ListFoodsController implements Controller {
  constructor(private readonly listFoods: ListFoods) {}

  async handle(): Promise<HttpResponse> {
    try {
      const docs = await this.listFoods.list();
      const formattedDocs = docs.map((food) => ({
        id: food.id,
        group: food.group,
        description: food.description,
      }));

      return ok({ docs: formattedDocs });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
