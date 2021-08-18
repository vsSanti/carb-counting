import { Authentication } from '@/domain/usecases';
import { badRequest, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class LoginController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly authentication: Authentication
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;

      const validation = this.validation.validate({ input: body });
      if (validation.hasErrors) {
        return badRequest({ validationErrors: validation.errors });
      }

      const isAuthorized = await this.authentication.auth(body);
      if (!isAuthorized) {
        return unauthorized();
      }

      return null;
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
