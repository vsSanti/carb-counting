import { APIGatewayTokenAuthorizerEvent } from 'aws-lambda';
import { ConnectionOptions } from 'typeorm';

import { openTypeORMConnection } from '@/common/main/helper/open-typeorm-connection';
import { Controller, HttpRequest } from '@/common/presentation/protocols';
import { UnauthorizedError } from '@/common/presentation/errors';

export const lambdaAuthorizerAdapter = (handler: Controller, options: ConnectionOptions) => {
  return async (event: APIGatewayTokenAuthorizerEvent): Promise<any> => {
    await openTypeORMConnection(options);

    try {
      const httpRequest: HttpRequest = {
        authorizationArn: event.methodArn,
        authorizationToken: event.authorizationToken,
      };

      const response = await handler.handle(httpRequest);

      return response;
    } catch (error) {
      throw new UnauthorizedError();
    }
  };
};
