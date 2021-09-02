import { APIGatewayEvent, ProxyResult } from 'aws-lambda';

import { DbNames, openTypeORMConnection } from '@/common/main/helper/open-typeorm-connection';
import { Controller, HttpRequest, HttpResponse } from '@/common/presentation/protocols';

type EventHandler = {
  isPrivate?: boolean;
  handler: Controller;
};

export type LambdaRouteAdapterParams = {
  isPrivate?: boolean;
  dbName: DbNames;
  get?: EventHandler;
  post?: EventHandler;
};

export const lambdaRouteAdapter = (params: LambdaRouteAdapterParams) => {
  return async (event: APIGatewayEvent): Promise<ProxyResult> => {
    await openTypeORMConnection(params.dbName);

    const method: EventHandler = params[event.httpMethod.toLowerCase()];
    if (!method) {
      return {
        statusCode: 405,
        body: JSON.stringify({ errorMessage: 'Method Not Allowed' }),
      };
    }

    const httpRequest: HttpRequest = {
      body: JSON.parse(event.body),
      pathParameters: event.pathParameters,
    };

    if (params.isPrivate || method.isPrivate) {
      httpRequest.patientId = event.requestContext.authorizer.principalId;
    }

    const httpResponse: HttpResponse = await method.handler.handle(httpRequest);

    return {
      statusCode: httpResponse.statusCode,
      body: JSON.stringify(httpResponse.body),
    };
  };
};
