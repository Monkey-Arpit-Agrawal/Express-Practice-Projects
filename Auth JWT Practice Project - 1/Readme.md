# Express Authentication Backend

A simple Express.js backend application that implements basic user authentication with in-memory storage.

## Features

- User registration (signup)
- User authentication (signin)
- Token-based authentication
- Protected route to get user information
- In-memory user storage

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install express
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. The server will run on `http://localhost:3000`

## API Endpoints

### POST /signup
Register a new user.

**Request Body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**Response:**
```json
{
  "Message": "User Signed Up Successfully"
}
```

### POST /signin
Sign in an existing user and receive an authentication token.

**Request Body:**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

**Response:**
```json
{
  "Message": "Signed In Successfully",
  "Token": "generated_token_here"
}
```

### GET /me
Get current user information (requires authentication).

**Headers:**
```
token: your_authentication_token
```

**Response:**
```json
{
  "Info": "your_username"
}
```

## How Authentication Works

1. Users sign up with a username and password
2. Upon signin, a random token is generated and stored with the user
3. The token must be included in the `token` header for protected routes
4. The `/me` endpoint validates the token and returns user information

## Token Generation

The application generates a 10-character random token using:
- Lowercase letters (a-z)
- Uppercase letters (A-Z)
- Numbers (0-9)
- Special characters (@#$&)

## Data Storage

Currently uses in-memory storage with an array called `users`. Each user object contains:
- `username`: User's chosen username
- `password`: User's password (stored in plain text)
- `token`: Authentication token (added after signin)

## Security Considerations

⚠️ **This is a basic implementation for learning purposes. In production, you should:**

- Hash passwords before storing them
- Use proper JWT tokens instead of random strings
- Implement token expiration
- Add input validation and sanitization
- Use environment variables for sensitive data
- Implement rate limiting
- Add HTTPS support

## Potential Improvements

1. **Input Validation**: Add Zod for request body validation
2. **Duplicate Prevention**: Prevent the same user from signing up twice
3. **Data Persistence**: Use a database to persist user data
4. **Password Security**: Hash passwords using bcrypt
5. **JWT Tokens**: Replace random tokens with proper JWT implementation
6. **Error Handling**: Add comprehensive error handling
7. **Logging**: Add request logging for debugging

## Error Responses

- `401 Unauthorized`: Invalid or missing token
- `404 Not Found`: Invalid username or password during signin
- `200 OK`: Successful operations

## Development Notes

- The server runs on port 3000
- Uses Express.json middleware for parsing JSON request bodies
- All user data is lost when the server restarts (in-memory storage)
- No input validation is currently implemented