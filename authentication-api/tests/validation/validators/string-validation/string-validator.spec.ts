import { StringValidator } from '@/validation/validators/string-validators';

describe('String Validator', () => {
  let sut: StringValidator;

  beforeEach(() => {
    sut = new StringValidator();
  });

  it('should return undefined if parameter is a string', () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 'valid_string' } });
    expect(errorMessage).toBeUndefined();
  });
});
