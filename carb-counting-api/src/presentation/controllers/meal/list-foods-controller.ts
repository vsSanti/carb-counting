import { Controller, HttpResponse } from 'presentation-common';

import { ListFoods } from '@/domain/usecases';

export class ListFoodsController implements Controller {
  constructor(private readonly listFoods: ListFoods) {}

  async handle(): Promise<HttpResponse> {
    await this.listFoods.list();
    return null;
  }
}
