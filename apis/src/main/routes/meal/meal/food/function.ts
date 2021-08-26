import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeListFoodsController } from '@/main/factories/meal/controllers/meal/list-foods-controller-factory';
import { typeORMMealOptions } from '@/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMMealOptions,
  isPrivate: true,
  get: {
    handler: makeListFoodsController(),
  },
});
