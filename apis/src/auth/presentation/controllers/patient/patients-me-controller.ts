import { LoadPatientById } from '@/auth/domain/usecases';
import { ok, serverError, unauthorized } from '@/common/presentation/helpers';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';

export class PatientsMeController implements Controller {
  constructor(private readonly loadPatientById: LoadPatientById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { patientId } = httpRequest;

      const patient = await this.loadPatientById.load(patientId);
      if (!patient) return unauthorized();

      delete patient.password;

      return ok({ data: patient });
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}
