# Request Counter Middleware

A simple Express.js server that demonstrates how to create a global middleware for tracking the number of requests made to the server.

## Overview

This project implements a middleware that automatically counts every HTTP request made to the server and stores the count in a global variable. The middleware runs before any route handler and increments the counter for each incoming request.

## Features

- **Global Request Counting**: Tracks all incoming requests regardless of the endpoint
- **Real-time Counter**: Access the current count via a dedicated endpoint
- **Middleware Implementation**: Uses Express middleware pattern with `app.use()`
- **RESTful Endpoints**: Includes sample GET and POST endpoints for testing

## Installation

1. Clone or download the project files
2. Install dependencies:
```bash
npm install express
```

## Usage

1. Start the server:
```bash
node server.js
```

2. The server will start on port 3000:
```
Server is running on the Port : 3000
```

## API Endpoints

### GET /user
Returns a dummy user object.

**Response:**
```json
{
  "name": "john"
}
```

### POST /user
Creates a dummy user (simulation).

**Response:**
```json
{
  "msg": "created dummy user"
}
```

### GET /requestCount
Returns the current number of requests made to the server.

**Response:**
```json
{
  "requestCount": 5
}
```

## How It Works

### The Middleware

The core functionality is implemented using Express middleware:

```javascript
app.use((req, res, next) => {
    requestCount++;
    next();
});
```

**Key Points:**
- `app.use()` registers a global middleware that runs for every request
- The middleware function receives `req`, `res`, and `next` parameters
- `requestCount++` increments the counter for each request
- `next()` passes control to the next middleware/route handler

### Request Flow

1. Client makes a request to any endpoint
2. Global middleware executes first
3. Request counter is incremented
4. `next()` is called to continue to the route handler
5. Route handler processes the request and sends response

## Testing the Counter

You can test the request counter by making multiple requests and checking the count:

```bash
# Make some requests
curl http://localhost:3000/user
curl http://localhost:3000/user -X POST
curl http://localhost:3000/user

# Check the current count
curl http://localhost:3000/requestCount
# Response: {"requestCount": 4}
```

## Technical Details

- **Port**: 3000
- **Global Variable**: `requestCount` stores the total number of requests
- **Middleware Type**: Application-level middleware using `app.use()`
- **Response Format**: JSON responses for all endpoints

## Learning Objectives

This project demonstrates:
- How to create and use Express middleware
- Understanding of middleware execution order
- Global state management in Express applications
- RESTful API design patterns
- Request/response handling in Express

## Extending the Project

You could enhance this project by:
- Adding request timestamps
- Tracking different types of requests separately
- Implementing request rate limiting
- Adding request logging with more details
- Persisting the counter to a database
- Adding middleware for specific routes only

## The Readme File Is AI Generated -- Developer Monkey Arpit