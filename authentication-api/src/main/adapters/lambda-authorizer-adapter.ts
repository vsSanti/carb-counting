import { UnauthorizedError } from '@/presentation/errors';
import { Controller, HttpRequest } from '@/presentation/protocols';
import { APIGatewayTokenAuthorizerEvent } from 'aws-lambda';
import { openTypeORMConnection } from '../helper/open-typeorm-connection';

export const lambdaAuthorizerAdapter = (handler: Controller) => {
  return async (event: APIGatewayTokenAuthorizerEvent): Promise<any> => {
    await openTypeORMConnection();

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
