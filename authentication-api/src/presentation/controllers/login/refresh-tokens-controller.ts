import { LoadPatientByToken } from '@/domain/usecases';
import { badRequest, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class RefreshTokensController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly loadPatientByToken: LoadPatientByToken
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const validation = this.validation.validate({ input: body });
    if (validation.hasErrors) {
      return badRequest({ validationErrors: validation.errors });
    }

    const { refreshToken } = body;

    const patient = await this.loadPatientByToken.load(refreshToken);
    if (!patient) return unauthorized();

    return null;
  }
}
