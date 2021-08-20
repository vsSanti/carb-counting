import { LoadPatientById } from '@/domain/usecases';
import { ok, serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class PatientsMeController implements Controller {
  constructor(private readonly loadPatientById: LoadPatientById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId } = httpRequest;

      const patient = await this.loadPatientById.load(patientId);
      if (!patient) return unauthorized();

      return ok({ data: patient });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
