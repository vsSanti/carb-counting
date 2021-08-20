import { LoadPatientById } from '@/domain/usecases';
import { serverError, unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class PatientsMeController implements Controller {
  constructor(private readonly loadPatientById: LoadPatientById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId } = httpRequest;

      await this.loadPatientById.load(patientId);

      return unauthorized();
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
