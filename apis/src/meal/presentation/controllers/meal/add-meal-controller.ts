import { badRequest } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { ObjectValidator } from '@/common/validation/protocols';

export class AddMealController implements Controller {
  constructor(private readonly validation: ObjectValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const validation = this.validation.validate({ input: body });
    return badRequest({ validationErrors: validation.errors });
  }
}
