import { CompareValidator } from '../../../src';

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

  it("should return an error string if parameters aren't equal", () => {
    const errorMessage = sut.validate({
      fieldName: 'field',
      input: { field: 'value', anotherField: 'different_value' },
    });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe("Values aren't equal.");
  });
});
