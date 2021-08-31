import { ArrayValidator } from '@/common/validation/validators';

describe('Array Validator', () => {
  let sut: ArrayValidator;

  beforeEach(() => {
    sut = new ArrayValidator();
  });

  it('should return undefined if parameter is an array', () => {
    const errorMessage = sut.validate({
      fieldName: 'field',
      input: { field: [] },
    });
    expect(errorMessage).toBeUndefined();
  });
});
