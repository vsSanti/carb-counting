import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeListFoodsController } from '@/meal/main/factories/controllers/meal/list-foods/list-foods-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'meal',
  isPrivate: true,
  get: {
    handler: makeListFoodsController(),
  },
});
