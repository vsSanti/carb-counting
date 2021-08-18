import { AddPatient, GenerateTokens } from '@/domain/usecases';
import { ParameterInUseError } from '@/presentation/errors';
import {
  badRequest,
  conflict,
  created,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class SignUpController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly addPatient: AddPatient,
    private readonly generateTokens: GenerateTokens
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
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

      const patient = await this.addPatient.add({
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

      if (!patient) {
        return conflict(new ParameterInUseError('email'));
      }

      const authenticationModel = await this.generateTokens.generate(patient.id);

      return created({ data: authenticationModel });
    } catch (error) {
      return serverError(error);
    }
  }
}
