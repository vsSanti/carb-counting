import { GenericObjectArrayPropertyBuilder } from '@/common/validation/builders';

import { ObjectValidatorSpy, PropertyValidationSpy } from '@/tests/common/validations/mocks';

describe('GenericObjectArrayProperty Builder', () => {
  const fieldName = 'field';
  const params = {
    fieldName,
    input: { [fieldName]: [{ param: 'something' }, { param: 'another' }] },
  };
  let arrayValidationSpy: PropertyValidationSpy;
  let objectValidationSpy: ObjectValidatorSpy;
  let sut: GenericObjectArrayPropertyBuilder;

  beforeEach(() => {
    arrayValidationSpy = new PropertyValidationSpy();
    objectValidationSpy = new ObjectValidatorSpy();
    sut = new GenericObjectArrayPropertyBuilder(fieldName, arrayValidationSpy, objectValidationSpy);
  });

  it('should call PropertyValidation with correct params', () => {
    sut.validate(params);
    expect(params).toEqual(arrayValidationSpy.params);
  });

  it('should return an array of errors if PropertyValidation validation fails', () => {
    arrayValidationSpy.error = 'mocked error';
    const errors = sut.validate(params);
    expect(errors).toBeTruthy();
    expect(errors.length).toBe(1);
    expect(errors).toEqual(['mocked error']);
  });

  it('should call ObjectValidator for every array value', () => {
    sut.validate(params);
    expect(objectValidationSpy.timesCalled).toBe(2);
    expect({ input: params.input[fieldName][1] }).toEqual(objectValidationSpy.params);
  });

  it('should return an array of strings if one objectValidation has errors', async () => {
    objectValidationSpy.response = {
      hasErrors: true,
      errors: { [fieldName]: [], another: ['mocked error'] },
    };
    const errors = sut.validate(params);
    expect(errors).toEqual(['[0]:[another]: mocked error', '[1]:[another]: mocked error']);
  });
});
