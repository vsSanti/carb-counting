import { notFound, ok, serverError } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { LoadMealById } from '@/meal/domain/usecases';

export class LoadMealByIdController implements Controller {
  constructor(private readonly loadMealById: LoadMealById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { mealId } = httpRequest.pathParameters;

      const meal = await this.loadMealById.load(mealId);
      if (!meal) return notFound('meal');

      return ok({ data: meal });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
