import { ListMeals } from '@/meal/domain/usecases';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';

export class ListMealsController implements Controller {
  constructor(private readonly listMeals: ListMeals) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { page } = httpRequest.queryStringParameters;

    await this.listMeals.list({ page });

    return null;
  }
}
