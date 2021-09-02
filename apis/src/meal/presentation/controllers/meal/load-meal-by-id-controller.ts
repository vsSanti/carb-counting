import { notFound, serverError } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { LoadMealById } from '@/meal/domain/usecases';

export class LoadMealByIdController implements Controller {
  constructor(private readonly loadMealById: LoadMealById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { mealId } = httpRequest.pathParameters;

      await this.loadMealById.load(mealId);

      return notFound('meal');
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
