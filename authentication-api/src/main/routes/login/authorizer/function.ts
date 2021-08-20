import 'source-map-support/register';

import { lambdaAuthorizerAdapter } from '@/main/adapters/lambda-authorizer-adapter';
import { makeAuthorizerController } from '@/main/factories/controllers/login/authorizer/authorizer-controller-factory';

export const handler = lambdaAuthorizerAdapter(makeAuthorizerController());
