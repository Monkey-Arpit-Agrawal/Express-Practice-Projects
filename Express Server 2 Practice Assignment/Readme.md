# Calculator HTTP Server

A simple HTTP server built with Express.js that provides basic arithmetic operations through REST API endpoints.

## Features

- **Addition**: Add two numbers
- **Subtraction**: Subtract two numbers  
- **Multiplication**: Multiply two numbers
- **Division**: Divide two numbers

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

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
   node server.js
   ```

2. The server will start running on `http://localhost:3000`

3. You should see the message: "App is running on the Port : 3000"

## API Endpoints

All endpoints use dynamic routes where `a` and `b` are path parameters and return the result in JSON format.

### Addition
```
GET http://localhost:3000/add/5/3
```
**Response:**
```json
{
  "Result": 8
}
```

### Subtraction
```
GET http://localhost:3000/subtract/10/4
```
**Response:**
```json
{
  "Result": 6
}
```

### Multiplication
```
GET http://localhost:3000/multiply/7/6
```
**Response:**
```json
{
  "Result": 42
}
```

### Division
```
GET http://localhost:3000/divide/15/3
```
**Response:**
```json
{
  "Result": 5
}
```

## Testing the API

You can test the API using:

- **Browser**: Visit the URLs directly in your web browser
- **curl**: 
  ```bash
  curl "http://localhost:3000/add/5/3"
  ```
- **Postman**: Import the endpoints and test them
- **Any HTTP client**: Send GET requests to the endpoints

## Example Usage

```bash
# Addition
curl "http://localhost:3000/add/10/5"
# Returns: {"Result":15}

# Subtraction  
curl "http://localhost:3000/subtract/10/3"
# Returns: {"Result":7}

# Multiplication
curl "http://localhost:3000/multiply/4/7"
# Returns: {"Result":28}

# Division
curl "http://localhost:3000/divide/20/4"
# Returns: {"Result":5}
```

## Notes

- The server uses dynamic routes where numbers are passed as path parameters
- The server expects numeric values for parameters `a` and `b`
- Division by zero will return `Infinity`
- Invalid or missing parameters will result in `NaN`
- All responses are returned with HTTP status code 200
- The server runs on port 3000 by default

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js

## License

This project is open source and available under the [MIT License](LICENSE).