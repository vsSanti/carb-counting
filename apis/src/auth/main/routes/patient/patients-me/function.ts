import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makePatientsMeController } from '@/auth/main/factories/controllers/patient/patients-me/patients-me-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'auth',
  isPrivate: true,
  get: {
    handler: makePatientsMeController(),
  },
});
