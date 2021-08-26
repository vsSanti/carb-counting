import { LoadPatientByToken } from '@/domain/auth/usecases';
import { UnauthorizedError } from '@/presentation/common/errors';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/common/protocols';

export class AuthorizerController implements Controller {
  constructor(private readonly loadPatientByToken: LoadPatientByToken) {}

  private generatePolicy = (principalId: string, methodArn: string, effect: 'Allow'): any => {
    const apiGatewayWildcard = methodArn.split('/', 2).join('/') + '/*';

    return {
      principalId,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: apiGatewayWildcard,
          },
        ],
      },
    };
  };

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { authorizationToken, authorizationArn } = httpRequest;
    if (
      !authorizationToken ||
      !authorizationToken.startsWith('Bearer ') ||
      !authorizationToken.replace('Bearer ', '').length
    ) {
      throw new UnauthorizedError();
    }

    const patient = await this.loadPatientByToken.load(authorizationToken.replace('Bearer ', ''));
    if (!patient) {
      throw new UnauthorizedError();
    }

    const policies = this.generatePolicy(patient.id, authorizationArn, 'Allow');

    return policies;
  }
}
