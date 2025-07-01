# Kidney Hospital API

A simple REST API built with Express.js that simulates a kidney hospital management system for a single user named John. This API allows you to manage kidney health status through various operations.

## Features

- Check kidney count and health status
- Add new kidneys (healthy or unhealthy)
- Make all kidneys healthy
- Remove unhealthy kidneys
- Error handling for edge cases

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repo - name>
   ```

2. Install dependencies:
   ```bash
   npm install express
   ```

3. Run the application:
   ```bash
   node app.js
   ```

The server will start on port 3000. You should see the message: "Server is running on the Port : 3000"

## API Endpoints

### 1. GET `/` - Check Kidney Status
Returns the current kidney count and health status for John.

**Response:**
```json
{
  "Total Kidneys : ": 2,
  "Healthy Kidneys : ": 1,
  "Unhealthy Kidneys : ": 1
}
```

### 2. POST `/` - Add New Kidney
Adds a new kidney with the specified health status.

**Request Body:**
```json
{
  "status": "Healthy"
}
```
or
```json
{
  "status": "Unhealthy"
}
```

**Response:**
```
Kidney Added Successfully
```

### 3. PUT `/` - Make All Kidneys Healthy
Converts all unhealthy kidneys to healthy status.

**Success Response:**
```
Updated The Kidneys Successfully
```

**Error Response (when no unhealthy kidneys exist):**
```
No Unhealthy Kidneys
```
*Status Code: 400*

### 4. DELETE `/` - Remove Unhealthy Kidneys
Removes all kidneys with unhealthy status.

**Success Response:**
```
Done Deletion
```

**Error Response (when no unhealthy kidneys exist):**
```
No Unhealthy Kidneys
```
*Status Code: 400*

## Usage Examples

### Using curl:

1. **Check kidney status:**
   ```bash
   curl http://localhost:3000/
   ```

2. **Add a healthy kidney:**
   ```bash
   curl -X POST http://localhost:3000/ \
     -H "Content-Type: application/json" \
     -d '{"status": "Healthy"}'
   ```

3. **Add an unhealthy kidney:**
   ```bash
   curl -X POST http://localhost:3000/ \
     -H "Content-Type: application/json" \
     -d '{"status": "Unhealthy"}'
   ```

4. **Make all kidneys healthy:**
   ```bash
   curl -X PUT http://localhost:3000/
   ```

5. **Remove unhealthy kidneys:**
   ```bash
   curl -X DELETE http://localhost:3000/
   ```

## Error Handling

The API includes proper error handling for edge cases:

- **PUT request when all kidneys are already healthy:** Returns 400 status with message "No Unhealthy Kidneys"
- **DELETE request when no unhealthy kidneys exist:** Returns 400 status with message "No Unhealthy Kidneys"
- **404 errors:** Serves an `index.html` file for undefined routes

## Data Structure

The application uses an in-memory data structure:

```javascript
let user = {
    Name: "John",
    kidneys: [
        { Status: 'Healthy' },
        { Status: 'Unhealthy' }
    ]
}
```

## Initial State

By default, John starts with:
- 1 Healthy kidney
- 1 Unhealthy kidney
- Total: 2 kidneys

## Notes

- This is an in-memory application, so data will reset when the server restarts
- The application assumes only one user (John)
- Kidney status should be either "Healthy" or "Unhealthy" (case-sensitive)
- The application serves a 404 page (`index.html`) for undefined routes

## File Structure

```
kidney-hospital-api/
├── app.js          # Main application file
├── index.html      # 404 error page
├── package.json    # Project dependencies
└── README.md       # This file
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.