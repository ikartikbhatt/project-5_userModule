# User Management API

## Project Overview

This is a RESTful API for user management with full CRUD (Create, Read, Update, Delete) operations. The API allows you to perform all basic user management operations with data persistence in a local JSON file.

## Features

- User Registration with validation
- User Login
- Update User Details
- Delete Users
- Data persistence using a local JSON file
- Request/response validation and error handling
- Modular architecture with separate modules for different operations

## API Endpoints

### User Registration
- **POST** `/user/userSignUp` - Register a new user

### User Login
- **POST** `/user/userlogin` - User login

### Update User Details
- **POST** `/user/updateUserDetails` - Update user information

### Delete User
- **POST** `/user/userDelete` - Delete a user

## Project Structure

```
project-5_usermodule/
├── server/
│   └── app.js              # Entry point of the application
├── helper/                   # Helper functions
├── modules/                  # Core modules
├── routes/                   # API route definitions
├── utils/                    # Utility functions
├── validator/                # Request validation
├── models/                   # Data models
├── package.json              # Project metadata and dependencies
└── README.md                # This file
```

## Dependencies

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [uuid](https://www.npmjs.com/package/uuid) - UUID generation
- [Nodemon](https://nodemon.io/) - Process manager (dev)

## Installation & Setup

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The server will start running on `http://localhost:5000` (or the first available port).

## API Endpoints

### Register a new user

**POST** `/user/userSignUp`

### Login

**POST** `/user/userlogin`

### Update user details

**POST** `/user/updateUserDetails`

### Delete a user

**POST** `/user/userDelete`

## Data Storage

User data is stored in `utils/userData.json` as a JSON array of user objects.

## Validation

The application validates all incoming requests:
- Required fields: `userName`, `userEmail`, `userPassword`
- Email format validation
- Password length validation (8-20 characters)
- Username length validation (3-2왠 characters)
- Duplicate user validation

## Modules

- `server/app.js` - Entry point of the application
- `helper/` - Contains helper functions for each operation
- `modules/` - Core modules for business logic
- `routes/` - API route definitions
- `utils/` - Utility functions
- `validator/` - Request validation
- `models/` - Data models

## Validators

The application uses middleware to validate requests:
- `userDeleteValidator` - Validates user deletion requests
- `userLoginValidator` - Validates user login requests
- `userSignUpValidator` - Validates new user sign up requests
- `userUpdateValidator` - Validates user update requests

## Response Format

The API returns responses in a consistent format:

```json
{
  "responseCode": "201",
  "status": "success",
  "message": "User created successfully"
}
```

## Data Persistence

User data is stored in `utils/userData.json` in the following format:

```json
[
  {
    "id": "30021a4f-1b2e-4893-95be-52026e8365bd",
    "userName": "raju",
    "userEmail": "testdata@example.com",
    "userPassword": "12345678",
    "mobile": "999999999",
    "age": "25",
    "bio": "",
    "address": "",
    "country": "",
    "state": "",
    "city": "",
    "pincode": "",
    "name": "test user"
  }
]
```

## Development

To run the application in development mode with auto-restart:

```bash
npm run dev
```

This will use Nodemon to automatically restart the server on file changes.

## License

This is an assignment for learning purposes.
