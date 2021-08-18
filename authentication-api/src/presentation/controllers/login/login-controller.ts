import { Authentication, GenerateTokens } from '@/domain/usecases';
import { badRequest, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

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

      await this.generateTokens.generate(patient.id);

      return null;
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
