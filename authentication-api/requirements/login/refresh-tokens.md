# Refresh tokens

> ## Body
- ✅ refreshToken:
  - ✅ Type: `string`;
  - ✅ Required: `true`;

> ## Main flow
1. ✅ Validate body parameters;
2. ✅ Load patient by id;
    - It should extract the id from `refreshToken`;
3. ✅ Generate `accessToken` and `refreshToken` for patient;
4. ✅ Return tokens and status code 200;

> ## Error cases
- ✅ If there's any error on body parameters, returns 400;
- ✅ If there's no patient is found, returns 401;
- ✅ If there's an error on verifying the `refreshToken`, returns 500;
- ✅ If there's any kind of error, it should return 500;

> ## Route
**[POST]** `/refresh`