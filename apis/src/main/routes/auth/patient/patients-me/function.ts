import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makePatientsMeController } from '@/main/factories/auth/controllers/patient/patients-me/patients-me-controller-factory';
import { typeORMAuthOptions } from '@/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  isPrivate: true,
  get: {
    handler: makePatientsMeController(),
  },
});
