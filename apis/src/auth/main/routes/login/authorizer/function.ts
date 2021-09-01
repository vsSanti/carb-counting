import 'source-map-support/register';

import { lambdaAuthorizerAdapter } from '@/common/main/adapters/lambda-authorizer-adapter';
import { makeAuthorizerController } from '@/auth/main/factories/controllers/login/authorizer/authorizer-controller-factory';

export const handler = lambdaAuthorizerAdapter(makeAuthorizerController(), 'auth');
