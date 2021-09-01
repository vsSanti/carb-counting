import 'source-map-support/register';

import { lambdaRouteAdapter } from '@/common/main/adapters/lambda-route-adapter';
import { makeAddMealController } from '@/meal/main/factories/controllers/meal/add-meal/add-meal-controller-factory';
import { typeORMMealOptions } from '@/common/main/helper/typeorm-options';

export const handler = lambdaRouteAdapter({
  typeORMOptions: typeORMMealOptions,
  isPrivate: true,
  post: {
    handler: makeAddMealController(),
  },
});
