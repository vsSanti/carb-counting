import {
  ObjectValidator,
  ObjectValidatorParams,
  ObjectValidatorReturn,
} from '@/presentation/protocols';

export class ObjectValidatorSpy implements ObjectValidator {
  response: ObjectValidatorReturn = {
    hasErrors: false,
    errors: {},
  };
  params: ObjectValidatorParams;

  validate(params: ObjectValidatorParams): ObjectValidatorReturn {
    this.params = params;
    return this.response;
  }
}
