import { ListMeals } from '@/meal/domain/usecases';
import { ok, serverError } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';

export class ListMealsController implements Controller {
  constructor(private readonly listMeals: ListMeals) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId } = httpRequest;
      const { page } = httpRequest.queryStringParameters;

      const mealModels = await this.listMeals.list({ page, patientId });

      return ok({ docs: mealModels });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
