import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class RefreshTokensController implements Controller {
  constructor(private readonly validation: ObjectValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    this.validation.validate({ input: body });

    return null;
  }
}
