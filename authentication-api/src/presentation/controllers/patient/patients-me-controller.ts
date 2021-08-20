import { LoadPatientById } from '@/domain/usecases';
import { unauthorized } from '@/presentation/helpers/http/http-helper';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';

export class PatientsMeController implements Controller {
  constructor(private readonly loadPatientById: LoadPatientById) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { patientId } = httpRequest;

    await this.loadPatientById.load(patientId);

    return unauthorized();
  }
}
