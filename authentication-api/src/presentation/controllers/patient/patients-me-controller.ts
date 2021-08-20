import { LoadPatientById } from '@/domain/usecases';
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse, ObjectValidator } from '@/presentation/protocols';

export class PatientsMeController implements Controller {
  constructor(
    private readonly validation: ObjectValidator,
    private readonly loadPatientById: LoadPatientById
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId } = httpRequest;

      const validation = this.validation.validate({ input: { patientId } });
      if (validation.hasErrors) {
        return badRequest({ validationErrors: validation.errors });
      }

      const patient = await this.loadPatientById.load(patientId);
      if (!patient) return unauthorized();

      return ok({ data: patient });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
