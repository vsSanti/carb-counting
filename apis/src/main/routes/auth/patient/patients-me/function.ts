import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makePatientsMeController } from '@/main/factories/controllers/auth/patient/patients-me/patients-me-controller-factory';

export const handler = lambdaRouteAdapter({
  get: {
    isPrivate: true,
    handler: makePatientsMeController(),
  },
});
