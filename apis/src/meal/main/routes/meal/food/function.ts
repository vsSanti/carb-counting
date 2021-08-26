import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeListFoodsController } from '@/meal/main/factories/controllers/meal/list-foods-controller-factory';
import { typeORMMealOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMMealOptions,
  isPrivate: true,
  get: {
    handler: makeListFoodsController(),
  },
});
