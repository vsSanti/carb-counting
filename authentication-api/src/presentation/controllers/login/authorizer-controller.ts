import { UnauthorizedError } from '@/presentation/errors';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class AuthorizerController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    throw new UnauthorizedError();
  }
}
