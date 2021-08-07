import 'source-map-support/register';
import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';
import { bodyParser } from '@/parser';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<any> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Paths worked',
        body: bodyParser(event.body),
      },
      null,
      2,
    ),
  };
};