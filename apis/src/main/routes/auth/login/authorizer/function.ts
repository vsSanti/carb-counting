import 'source-map-support/register';

import { lambdaAuthorizerAdapter } from '@/main/adapters/lambda-authorizer-adapter';
import { makeAuthorizerController } from '@/main/factories/controllers/auth/login/authorizer/authorizer-controller-factory';

export const handler = lambdaAuthorizerAdapter(makeAuthorizerController());
