import { APIGatewayEvent, ProxyResult } from 'aws-lambda';
import { Controller, HttpRequest, HttpResponse } from 'presentation-common';

import { openTypeORMConnection } from '@/main/helper/open-typeorm-connection';

type EventHandler = {
  isPrivate?: boolean;
  handler: Controller;
};

export type LambdaRouteAdapterParams = {
  get?: EventHandler;
  post?: EventHandler;
};

export const lambdaRouteAdapter = (params: LambdaRouteAdapterParams) => {
  return async (event: APIGatewayEvent): Promise<ProxyResult> => {
    await openTypeORMConnection();

    const method: EventHandler = params[event.httpMethod.toLowerCase()];
    if (!method) {
      return {
        statusCode: 405,
        body: JSON.stringify({ errorMessage: 'Method Not Allowed' }),
      };
    }

    const httpRequest: HttpRequest = {
      body: JSON.parse(event.body),
    };

    if (method.isPrivate) {
      httpRequest.patientId = event.requestContext.authorizer.principalId;
    }

    const httpResponse: HttpResponse = await method.handler.handle(httpRequest);

    return {
      statusCode: httpResponse.statusCode,
      body: JSON.stringify(httpResponse.body),
    };
  };
};
