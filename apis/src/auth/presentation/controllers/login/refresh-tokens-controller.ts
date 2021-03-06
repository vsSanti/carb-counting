import { GenerateTokens, LoadPatientByToken } from '@/auth/domain/usecases';
import { badRequest, ok, serverError, unauthorized } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';
import { ObjectValidator } from '@/common/validation/protocols';

export class RefreshTokensController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly loadPatientByToken: LoadPatientByToken,
    private readonly generateTokens: GenerateTokens
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;

      const validation = this.validation.validate({ input: body });
      if (validation.hasErrors) {
        return badRequest({ validationErrors: validation.errors });
      }

      const { refreshToken } = body;

      const patient = await this.loadPatientByToken.load(refreshToken);
      if (!patient) return unauthorized();

      const tokensModel = await this.generateTokens.generate(patient.id);

      return ok({ data: tokensModel });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
