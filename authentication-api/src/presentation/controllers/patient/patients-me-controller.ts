import {
  Controller,
  HttpRequest,
  HttpResponse,
  ok,
  serverError,
  unauthorized,
} from 'presentation-common';

import { LoadPatientById } from '@/domain/usecases';

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
