import { badRequest } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class LoginController implements Controller {
  constructor(private readonly validation: ObjectValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const validation = this.validation.validate({ input: body });
    if (validation.hasErrors) {
      return badRequest({ validationErrors: validation.errors });
    }

    return null;
  }
}
