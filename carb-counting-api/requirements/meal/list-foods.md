# List foods
This route all foods registered on database.

> ## Main flow
1. 🚫 Load all foods on database;
    - 🚫 It should cache the result;
2. 🚫 Return food array and status code 200;

> ## Error cases
- 🚫 If there's any kind of error, it should return 500;

> ## Route
- **[GET]** `/foods`

> ## Middleware
- [**authorizer**](../../../authentication-api/requirements/login/authorizer.md)