import { notFound } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { LoadMealById } from '@/meal/domain/usecases';

export class LoadMealByIdController implements Controller {
  constructor(private readonly loadMealById: LoadMealById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { mealId } = httpRequest.pathParameters;

    await this.loadMealById.load(mealId);

    return notFound('meal');
  }
}
