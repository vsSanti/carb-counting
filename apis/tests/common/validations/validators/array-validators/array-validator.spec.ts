import { ArrayValidator } from '@/common/validation/validators';

describe('Array Validator', () => {
  describe('Without options', () => {
    let sut: ArrayValidator;
    beforeEach(() => {
      sut = new ArrayValidator();
    });

    it('should return undefined if parameter is an array', () => {
      const errorMessage = sut.validate({ fieldName: 'field', input: { field: [] } });
      expect(errorMessage).toBeUndefined();
    });

    it("should return an error string if parameter isn't an array", () => {
      const errorMessage = sut.validate({ fieldName: 'field', input: { field: undefined } });
      expect(errorMessage).toBeTruthy();
      expect(typeof errorMessage).toBe('string');
      expect(errorMessage).toBe("It isn't an array.");
    });
  });

  describe('With validLength option', () => {
    let sutValidTrue: ArrayValidator;
    let sutValidFalse: ArrayValidator;

    beforeEach(() => {
      sutValidTrue = new ArrayValidator({ validLength: true });
      sutValidFalse = new ArrayValidator({ validLength: false });
    });

    it('should return an error string if array is empty and validLength is true', () => {
      const errorMessage = sutValidTrue.validate({ fieldName: 'field', input: { field: [] } });
      expect(errorMessage).toBeTruthy();
      expect(typeof errorMessage).toBe('string');
      expect(errorMessage).toBe('Array must contain at least one record.');
    });

    it('should return undefined if array is empty and validLength is false', () => {
      const errorMessage = sutValidFalse.validate({ fieldName: 'field', input: { field: [] } });
      expect(errorMessage).toBeUndefined();
    });
  });
});
