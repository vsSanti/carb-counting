# Sign Up

> ## Success cases

1. ⛔️ Recieve a request of type **POST** on route **/signup**
2. ⛔️ Validate mandatory data (**name**, **email**, **password**, **passwordConfirmation**, **birthDate**, **weight**, **height**, **sex**, **glycemicTarget** and **insulinUnitsPerDay**)
3. ⛔️ Ensure that **password** and **passwordConfirmation** are equal
4. ⛔️ Ensure that **email** is unique
5. ⛔️ **Search** user by email
6. ⛔️ Generate an **encrypted** password
7. ⛔️ Create account for the user with given data, replacing recieved password with the encrypted one
7. ⛔️ Return **201** with the  **access token** on body

> ## Exceptions

1. ⛔️ Return error **404** if API doesn't exists
2. ⛔️ Return error **400** if mandatory data isn't provided
2. ⛔️ Return error **400** if password and passwordConfirmation aren't equal
3. ⛔️ Return error **400** if email is invalid
3. ⛔️ Return error **409** if email is already in use
5. ⛔️ Return error **500** if exception while encrypting password occurs
5. ⛔️ Return error **500** if exception while searching user by email occurs
5. ⛔️ Return error **500** if exception while creating user occurs
6. ⛔️ Return error **500** if something else goes wrong