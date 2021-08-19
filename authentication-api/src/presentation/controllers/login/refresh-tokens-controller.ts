import { LoadPatientByToken } from '@/domain/usecases';
import { badRequest } from '@/presentation/helpers/http/http-helper';
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

    await this.loadPatientByToken.load(refreshToken);

    return null;
  }
}
