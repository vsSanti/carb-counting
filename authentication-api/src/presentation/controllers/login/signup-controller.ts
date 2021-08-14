import { badRequest } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class SignUpController implements Controller {
  constructor(private readonly validation: ObjectValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const validation = this.validation.validate({ input: httpRequest.body });
    if (validation.hasErrors) {
      return badRequest({ validationErrors: validation.errors });
    }
    return;
  }
}
