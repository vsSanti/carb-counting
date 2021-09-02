# Load meal by id
This route returns a meal by its id.

> ## Main flow
1. ✅ Load meal by id;
    - It should get the id from path parameters;
    - It should also load every food;
2. ✅ Return meal and status code 200;

> ## Error cases
- ✅ If meal isn't found, returns 404;
- ✅ If there's any kind of error, it should return 500;

> ## Route
- **[GET]** `/meals/{mealId}`

> ## Middleware
- 🚫 [**authorizer**](../../auth/login/authorizer.md)