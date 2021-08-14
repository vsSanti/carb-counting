import { AddPatient } from '@/domain/usecases';
import { badRequest } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class SignUpController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly addPatient: AddPatient
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest;

    const validation = this.validation.validate({ input: body });
    if (validation.hasErrors) {
      return badRequest({ validationErrors: validation.errors });
    }

    const {
      email,
      password,
      name,
      sex,
      height,
      glycemicTarget,
      insulinUnitsPerDay,
      weight,
      birthDate,
    } = body;

    await this.addPatient.add({
      email,
      password,
      name,
      sex,
      height,
      glycemicTarget,
      insulinUnitsPerDay,
      weight,
      birthDate,
    });
    return;
  }
}
