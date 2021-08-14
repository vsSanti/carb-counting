import { GenericPropertyBuilder } from '@/validation/builders';

import { PropertyValidationSpy } from '@/tests/validation/mocks';

describe('GenericProperty Builder', () => {
  let propertyValidationSpy: PropertyValidationSpy;
  let sut: GenericPropertyBuilder;

  beforeEach(() => {
    propertyValidationSpy = new PropertyValidationSpy();
    sut = new GenericPropertyBuilder([propertyValidationSpy]);
  });

  it('should call PropertyValidation with correct params', () => {
    const params = { fieldName: 'field', input: { field: 'value' } };
    sut.validate(params);
    expect(params).toEqual(propertyValidationSpy.params);
  });
});
