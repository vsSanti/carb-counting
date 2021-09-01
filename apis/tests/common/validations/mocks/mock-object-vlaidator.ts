import {
  ObjectValidator,
  ObjectValidatorParams,
  ObjectValidatorReturn,
} from '@/common/validation/protocols';

export class ObjectValidatorSpy implements ObjectValidator {
  response: ObjectValidatorReturn = {
    hasErrors: false,
    errors: {},
  };
  params: ObjectValidatorParams;
  timesCalled = 0;

  validate(params: ObjectValidatorParams): ObjectValidatorReturn {
    this.params = params;
    this.timesCalled += 1;
    return this.response;
  }
}
