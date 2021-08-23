import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/main/adapters/lambda-route-adapter';
import { makeListFoodsController } from '@/main/factories/controllers/meal/food/list-foods-controller-factory';

export const handler = lambdaRouteAdapter({
  get: {
    handler: makeListFoodsController(),
  },
});
