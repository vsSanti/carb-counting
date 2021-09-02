import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeAddMealController } from '@/meal/main/factories/controllers/meal/add-meal/add-meal-controller-factory';
import { makeLoadMealByIdController } from '@/meal/main/factories/controllers/meal/load-meal-by-id/load-meal-by-id-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'meal',
  isPrivate: true,
  get: {
    handler: makeLoadMealByIdController(),
  },
  post: {
    handler: makeAddMealController(),
  },
});
