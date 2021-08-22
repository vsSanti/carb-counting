import { Controller, HttpResponse, serverError } from 'presentation-common';

import { ListFoods } from '@/domain/usecases';

export class ListFoodsController implements Controller {
  constructor(private readonly listFoods: ListFoods) {}

  async handle(): Promise<HttpResponse> {
    try {
      await this.listFoods.list();
      return null;
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
