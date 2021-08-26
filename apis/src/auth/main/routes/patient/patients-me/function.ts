import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makePatientsMeController } from '@/auth/main/factories/controllers/patient/patients-me/patients-me-controller-factory';
import { typeORMAuthOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMAuthOptions,
  isPrivate: true,
  get: {
    handler: makePatientsMeController(),
  },
});
