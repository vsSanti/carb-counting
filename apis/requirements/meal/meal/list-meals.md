# List Meals
This route list all meals registered from logged patient.

> ## Main flow
1. 🚫 Load all meals from logged patient;
    - 🚫 It should be sorted by most recent first;
    - 🚫 It should be paginated by 10;
2. 🚫 Return meal array and status code 200;

> ## Error cases
- 🚫 If there's any kind of error, it should return 500;

> ## Route
- 🚫 **[GET]** `/meals`

> ## Middleware
- 🚫 [**authorizer**](../../auth/login/authorizer.md)