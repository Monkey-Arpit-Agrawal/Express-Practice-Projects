# Express.js Todo List Application

A File-System-Based Todo List built with Express.js that allows users to manage their tasks with various operations.

## Features

- Add new todos with priority levels and group categorization
- Retrieve all todos
- Clear entire todo list
- Delete specific todos
- Update existing todos
- Mark todos as completed
- Persistent storage using JSON file

## Prerequisites

- Node.js 
- npm 

## Setup

1. Ensure you have Node.js installed on your system.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   node index.js
   ```

The server will run on `http://localhost:3000`.

## API Endpoints

### Landing Page
- `GET /` - Display the landing page with available operations

### Todo Operations
- `POST /add` - Add a new todo
- `GET /retrieve` - Get all todos
- `GET /clear` - Clear all todos
- `PUT /update` - Update a specific todo
- `PUT /complete` - Mark a todo as completed
- `DELETE /delete` - Delete a specific todo

## Request Body Formats

### Add Todo
```json
{
  "Todo": "Complete project",
  "Priority": "High",
  "Group": "Work"
}
```

### Update Todo
```json
{
  "Id": 1,
  "Todo": "Updated task",
  "Priority": "Medium",
  "Group": "Personal"
}
```

### Complete/Delete Todo
```json
{
  "Id": 1
}
```

## Response Formats

### Success Response
```json
{
  "Message": "Operation Successful"
}
```

### Error Response
```json
{
  "Message": "Error message details"
}
```

## Todo Object Structure
```json
{
  "Id": 1,
  "Todo": "Task description",
  "Priority": "High/Medium/Low",
  "Group": "Category",
  "Status": "Complete/Incomplete"
}
```

## Error Handling

The application includes comprehensive error handling for:
- File system operations
- Invalid JSON data
- Non-existent todos
- Empty todo list scenarios

## Data Persistence

Todos are stored in a `todos.json` file in the root directory. The file is automatically created when the first todo is added.

