# File-Based Todo List API

A RESTful API server built with Node.js and Express.js for managing todo items with persistent file storage. This server provides endpoints to create, read, update, and delete todo items stored in a JSON file, ensuring data persistence across server restarts.

## Features

- **File-based persistence** - Data stored in `todos.json` file for persistence
- **RESTful API** - Standard HTTP methods (GET, POST, PUT, DELETE)
- **Unique ID generation** - Auto-generated sequential IDs for each todo item
- **Complete CRUD operations** - Create, Read, Update, and Delete todos
- **Error handling** - Proper HTTP status codes and error messages
- **Data validation** - JSON parsing with error handling
- **Persistent storage** - Data survives server restarts

## Todo Item Structure

Each todo item contains the following fields:

```json
{
  "Id": 1,
  "Title": "Buy groceries",
  "Description": "I should buy groceries",
  "Completed": false
}
```

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install express
   ```
4. Create an empty `todos.json` file in the project root (optional - will be created automatically):
   ```bash
   echo "[]" > todos.json
   ```

## File Structure

```
project/
├── server.js          # Main server file
├── todos.json         # JSON file for storing todo data
├── index.html         # Frontend HTML file (optional)
└── README.md          # This file
```

## Running the Server

Start the server with:

```bash
node server.js
```

The server will start on port 3000. You should see the message:
```
App is running on the server 3000
```

## API Endpoints

### 1. Get All Todos
- **URL:** `GET /todos`
- **Description:** Retrieves all todo items from the JSON file
- **Response:** 
  - `200 OK` - Returns array of todo items
  - `404 Not Found` - If todo list is empty
  - `500 Internal Server Error` - If file read error occurs

**Example:**
```bash
curl http://localhost:3000/todos
```

**Response:**
```json
{
  "ToDo List": [
    {
      "Id": 1,
      "Title": "Buy groceries",
      "Description": "I should buy groceries",
      "Completed": false
    }
  ]
}
```

### 2. Get Todo by ID
- **URL:** `GET /todos/:id`
- **Description:** Retrieves a specific todo item by ID
- **Parameters:** `id` (integer) - The ID of the todo item
- **Response:**
  - `200 OK` - Returns the todo item
  - `404 Not Found` - If todo with given ID doesn't exist or list is empty
  - `500 Internal Server Error` - If file read error occurs

**Example:**
```bash
curl http://localhost:3000/todos/1
```

**Response:**
```json
{
  "ToDo": {
    "Id": 1,
    "Title": "Buy groceries",
    "Description": "I should buy groceries",
    "Completed": false
  }
}
```

### 3. Create New Todo
- **URL:** `POST /todos`
- **Description:** Creates a new todo item and saves to file
- **Request Body:** JSON object with todo details
- **Response:** 
  - `200 OK` - Returns success message and ID of created todo
  - `500 Internal Server Error` - If file read/write error occurs

**Example:**
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy groceries",
    "description": "I should buy groceries",
    "completed": false
  }'
```

**Response:**
```json
{
  "Message": "ToDo Added Successfully",
  "Id": 1
}
```

### 4. Update Todo
- **URL:** `PUT /todos/:id`
- **Description:** Updates an existing todo item by ID
- **Parameters:** `id` (integer) - The ID of the todo item to update
- **Request Body:** JSON object with updated fields (partial updates supported)
- **Response:**
  - `200 OK` - Returns success message and updated todo item
  - `404 Not Found` - If todo with given ID doesn't exist or list is empty
  - `500 Internal Server Error` - If file read/write error occurs

**Example:**
```bash
curl -X PUT http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Buy organic groceries",
    "completed": true
  }'
```

**Response:**
```json
{
  "Message": "ToDo Updated Successfully",
  "ToDo": {
    "Id": 1,
    "Title": "Buy organic groceries",
    "Description": "I should buy groceries",
    "Completed": true
  }
}
```

### 5. Delete Todo
- **URL:** `DELETE /todos/:id`
- **Description:** Deletes a todo item by ID
- **Parameters:** `id` (integer) - The ID of the todo item to delete
- **Response:**
  - `200 OK` - Returns success message and remaining todos
  - `404 Not Found` - If todo with given ID doesn't exist or list is empty
  - `500 Internal Server Error` - If file read/write error occurs

**Example:**
```bash
curl -X DELETE http://localhost:3000/todos/1
```

**Response:**
```json
{
  "Message": "ToDo Deleted Successfully",
  "ToDo List": []
}
```

### 6. Home Page
- **URL:** `GET /`
- **Description:** Serves the index.html file
- **Response:** `200 OK` - Returns HTML page

## Data Storage

The application uses a JSON file (`todos.json`) for data persistence:

- **File Location:** `./todos.json` (in the project root)
- **Format:** JSON array of todo objects
- **Automatic Creation:** File is created automatically if it doesn't exist
- **Pretty Printing:** JSON is formatted with 2-space indentation for readability

**Example `todos.json` structure:**
```json
[
  {
    "Id": 1,
    "Title": "Buy groceries",
    "Description": "I should buy groceries",
    "Completed": false
  },
  {
    "Id": 2,
    "Title": "Walk the dog",
    "Description": "Take Max for a walk in the park",
    "Completed": true
  }
]
```

## Error Handling

The API provides comprehensive error handling:

### HTTP Status Codes
- `200 OK` - Successful GET, PUT, DELETE operations
- `201 Created` - Successful POST operation (Note: Current implementation returns 200)
- `404 Not Found` - Resource not found, empty list, or invalid route
- `500 Internal Server Error` - File system errors

### Error Messages
- File read errors: "Error in reading the file . Try Again"
- File write errors: "Error Occurred . Please Try Again"
- Empty list: "Todo List Is Empty"
- Invalid ID: "Todo Does Not Exists For The Given ID"
- Invalid route: "Invalid URL"

## Data Validation

The application includes robust data validation:

- **JSON Parsing:** Safe parsing with error handling
- **Array Validation:** Ensures data is always an array
- **Type Conversion:** Converts string IDs to integers for comparison
- **Null Coalescing:** Supports partial updates using nullish coalescing operator (`??`)

## Testing the API

You can test the API using:

1. **cURL** (as shown in examples above)
2. **Postman** - Import the endpoints and test interactively
3. **Browser** - For GET requests, visit `http://localhost:3000/todos`
4. **HTTPie** - Alternative to cURL:
   ```bash
   http GET localhost:3000/todos
   http POST localhost:3000/todos title="Test" description="Test todo" completed:=false
   ```

## Sample Test Workflow

1. **Create a todo:**
   ```bash
   curl -X POST http://localhost:3000/todos \
     -H "Content-Type: application/json" \
     -d '{"title": "Learn Node.js", "description": "Complete Node.js tutorial", "completed": false}'
   ```

2. **Get all todos:**
   ```bash
   curl http://localhost:3000/todos
   ```

3. **Update the todo:**
   ```bash
   curl -X PUT http://localhost:3000/todos/1 \
     -H "Content-Type: application/json" \
     -d '{"completed": true}'
   ```

4. **Delete the todo:**
   ```bash
   curl -X DELETE http://localhost:3000/todos/1
   ```

## Advantages over In-Memory Storage

- **Persistence:** Data survives server restarts
- **Backup:** Easy to backup by copying the JSON file
- **Debugging:** Can manually inspect and modify data
- **Scalability:** Can handle larger datasets (within reason)
- **Portability:** Data file can be easily moved between environments

## Limitations

- **Concurrency:** Not suitable for high-concurrency scenarios
- **File Locking:** No file locking mechanism for concurrent writes
- **Performance:** File I/O operations for every request
- **Scalability:** Limited by file system performance
- **Data Integrity:** No transaction support or rollback capability

## Production Considerations

For production use, consider:

1. **Database Integration:** Use PostgreSQL, MongoDB, or similar
2. **Caching:** Implement Redis or in-memory caching
3. **Validation:** Add input validation with libraries like Joi
4. **Authentication:** Implement user authentication and authorization
5. **Rate Limiting:** Add rate limiting to prevent abuse
6. **Logging:** Implement proper logging with Winston or similar
7. **Error Monitoring:** Use tools like Sentry for error tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## The Readme Is AI Generated , there are a few mistakes in it but it's OK . Use AI for these mundane tasks like this and devote your time for actual programming . - Developer Monkey Arpit