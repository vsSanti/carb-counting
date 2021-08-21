import { StringValidator } from '../../../src';

describe('String Validator', () => {
  let sut: StringValidator;

  beforeEach(() => {
    sut = new StringValidator();
  });

  it('should return undefined if parameter is a string', () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 'valid_string' } });
    expect(errorMessage).toBeUndefined();
  });

  it("should return an error string if parameter isn't a string", () => {
    const errorMessage = sut.validate({ fieldName: 'field', input: { field: 10 } });
    expect(errorMessage).toBeTruthy();
    expect(typeof errorMessage).toBe('string');
    expect(errorMessage).toBe("It isn't a string.");
  });
});
