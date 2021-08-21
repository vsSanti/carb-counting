import { ObjectValidator } from 'validations';

import { Authentication, GenerateTokens } from '@/domain/usecases';
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class LoginController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly authentication: Authentication,
    private readonly generateTokens: GenerateTokens
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;

      const validation = this.validation.validate({ input: body });
      if (validation.hasErrors) {
        return badRequest({ validationErrors: validation.errors });
      }

      const patient = await this.authentication.auth(body);
      if (!patient) {
        return unauthorized();
      }

      const tokensModel = await this.generateTokens.generate(patient.id);

      return ok({ data: tokensModel });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
