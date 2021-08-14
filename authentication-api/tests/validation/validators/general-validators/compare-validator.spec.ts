import { CompareValidator } from '@/validation/validators/general-validators';

describe('Compare Validator', () => {
  let sut: CompareValidator;

  beforeEach(() => {
    sut = new CompareValidator('anotherField');
  });

  it('should return undefined if parameters are equal', () => {
    const errorMessage = sut.validate({
      fieldName: 'field',
      input: { field: 'value', anotherField: 'value' },
    });
    expect(errorMessage).toBeUndefined();
  });
});
