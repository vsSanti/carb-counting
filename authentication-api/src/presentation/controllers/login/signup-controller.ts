import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class SignUpController implements Controller {
  constructor(private readonly validation: ObjectValidator) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate({ input: httpRequest.body });
    return;
  }
}
