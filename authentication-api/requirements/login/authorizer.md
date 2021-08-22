# Authorizer

> ## Header
- ✅ Authorization:
  - ✅ Type: `string`;
  - ✅ Required: `true`;
  - ✅ Prefix: `Bearer`;

> ## Main flow
1. ✅ Load patient by id;
    - It should extract the id from `refreshToken`;
2. ✅ Return policies to allow lambda invoke and principalId as patient id;

> ## Error cases
- ✅ If there's no Authorization in headers, throw Error;
- ✅ If Authorization doesn't starts with `Bearer`, throw Error;
- ✅ If Authorization is empty, throw Error;
- ✅ If there's no patient with token id, throw Error;
- ✅ If there's any kind of error, throw Error;
