import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { APIGatewayEvent, ProxyResult } from 'aws-lambda';
import { openTypeORMConnection } from '../helper/open-typeorm-connection';

export type LambdaRouteAdapterParams = {
  post: {
    handler: Controller;
  };
};

export const lambdaRouteAdapter = ({ post }: LambdaRouteAdapterParams) => {
  return async (event: APIGatewayEvent): Promise<ProxyResult> => {
    await openTypeORMConnection();

    const method = event.httpMethod;
    const httpRequest: HttpRequest = {
      body: JSON.parse(event.body),
    };

    let httpResponse: HttpResponse;
    if (post && method === 'POST') {
      httpResponse = await post.handler.handle(httpRequest);
    } else {
      httpResponse = {
        statusCode: 405,
        body: {
          errorMessage: 'Method Not Allowed',
        },
      };
    }

    return {
      statusCode: httpResponse.statusCode,
      body: JSON.stringify(httpResponse.body),
    };
  };
};
