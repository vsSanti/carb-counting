import { badRequest } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { ObjectValidator } from '@/common/validation/protocols';
import { AddMeal } from '@/meal/domain/usecases';

export class AddMealController implements Controller {
  constructor(private readonly validation: ObjectValidator, private readonly addMeal: AddMeal) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const validation = this.validation.validate({ input: body });
    if (validation.hasErrors) {
      return badRequest({ validationErrors: validation.errors });
    }

    await this.addMeal.add(body);

    return null;
  }
}
