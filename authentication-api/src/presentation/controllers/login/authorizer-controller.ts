import { LoadPatientByToken } from '@/domain/usecases';
import { UnauthorizedError } from '@/presentation/errors';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class AuthorizerController implements Controller {
  constructor(private readonly loadPatientByToken: LoadPatientByToken) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { authorizationToken } = httpRequest;
    if (
      !authorizationToken ||
      !authorizationToken.startsWith('Bearer ') ||
      !authorizationToken.replace('Bearer ', '').length
    ) {
      throw new UnauthorizedError();
    }

    await this.loadPatientByToken.load(authorizationToken.replace('Bearer ', ''));

    return null;
  }
}
