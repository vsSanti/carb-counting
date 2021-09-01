import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeAddMealController } from '@/meal/main/factories/controllers/meal/add-meal/add-meal-controller-factory';

export const handler = lambdaRouteAdapter({
  dbName: 'meal',
  isPrivate: true,
  post: {
    handler: makeAddMealController(),
  },
});
