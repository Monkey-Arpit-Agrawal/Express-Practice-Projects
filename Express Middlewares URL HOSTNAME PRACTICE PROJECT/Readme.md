# Express Middleware Logger & Request Counter

A simple Express.js application demonstrating middleware functionality for request logging and counting.

## Features

- **Request Logging Middleware**: Logs detailed information about each incoming request
- **Request Counter Middleware**: Tracks the total number of requests sent to the server
- **Request Count Endpoint**: Exposes the current request count via API
- **Static File Serving**: Serves an HTML file from the root route
- **Error Handling**: Includes 404 and 500 error handling middleware

## What It Does

### Middleware Functions

1. **Request Counter Middleware**
   - Increments a counter for every incoming request
   - Tracks total requests across all endpoints

2. **Request Logger Middleware**
   - Logs HTTP method, URL, hostname, host, and timestamp
   - Displays information in a formatted table in the console
   - Captures detailed request metadata

### Endpoints

- `GET /` - Serves the `index.html` file
- `GET /requestCount` - Returns the current request count as JSON

## Installation & Setup

1. Clone or download the project files
2. Make sure you have Node.js installed
3. Install Express.js:
   ```bash
   npm install express
   ```
4. Create an `index.html` file in the project root directory
5. Run the application:
   ```bash
   node app.js
   ```

## Usage

1. Start the server - it will run on port 3000
2. Visit `http://localhost:3000` to access the main page
3. Check `http://localhost:3000/requestCount` to see the current request count
4. Monitor the console to see detailed request logs

## Console Output

The logging middleware displays request information in a table format:

```
┌─────────┬────────────────────────────────────────┬──────────────────────────────────────────┬─────────────────────────┬──────────────────────────┐
│ (index) │                Method                  │       URL / PATH / ROUTE / ENDPOINT      │ HOSTNAME / WEBSITE NAME │      Timestamp           │
├─────────┼────────────────────────────────────────┼──────────────────────────────────────────┼─────────────────────────┼──────────────────────────┤
│    0    │                 'GET'                  │                   '/'                    │       'localhost'       │  '2024-01-15T10:30:45Z' │
└─────────┴────────────────────────────────────────┴──────────────────────────────────────────┴─────────────────────────┴──────────────────────────┘
```

## API Response

The `/requestCount` endpoint returns:

```json
{
  "Request Count": 15
}
```

## Error Handling

- **404 Error**: Returns "Invalid Route" for undefined endpoints
- **500 Error**: Returns "Some Error Occurred At The Server" for server errors

## File Structure

```
project-root/
├── app.js          # Main application file
├── index.html      # HTML file served at root route
├── package.json    # Node.js dependencies
└── README.md       # This file
```

## Dependencies

- **Express.js**: Web framework for Node.js
- **Path**: Node.js built-in module for file path operations

## Technical Details

- **Port**: 3000
- **Middleware Order**: Request counter → Request logger → Route handlers → Error handlers
- **Request Tracking**: Global counter variable persists across all requests
- **Logging Format**: Tabular console output with comprehensive request details

## Learning Objectives

This project demonstrates:
- Creating custom middleware functions
- Understanding middleware execution order
- Request object properties and methods
- Error handling in Express.js
- Serving static files
- Creating RESTful API endpoints

## Future Enhancements

- Add request filtering by method or route
- Implement request rate limiting
- Add timestamp-based analytics
- Store request data in a database
- Add request duration tracking

## AI Generated Readme.md