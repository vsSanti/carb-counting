import { Controller, HttpResponse, ok, serverError } from 'presentation-common';

import { ListFoods } from '@/domain/usecases';

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
