# In-Memory Todo App

In-Memory Todo App using Express.js 

## Features

- Add new todos with priority and group assignments
- Retrieve all todos
- Clear entire todo list
- Delete specific todos
- Update existing todos
- Mark todos as completed

## Prerequisites

- Node.js 
- npm 

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install express
```

3. Start the server

```bash
node index.js
```

The server will start running on `http://localhost:3000`

## API Endpoints

### Landing Page


- **GET /** - Display the landing page with available operations

### Add Todo
- **POST /add**
- Creates a new todo item
- Request body:
```json
{
    "Todo": "Complete project",
    "Priority": "High",
    "Group": "Work"
}
```

### Retrieve Todos
- **GET /retrieve**
- Returns all todos in the list

### Clear Todos
- **GET /clear**
- Removes all todos from the list

### Update Todo
- **PUT /update**
- Updates an existing todo
- Request body:
```json
{
    "Id": 1,
    "Todo": "Updated task",
    "Priority": "Medium",
    "Group": "Personal"
}
```

### Mark Todo as Complete
- **PUT /complete**
- Marks a specific todo as completed
- Request body:
```json
{
    "Id": 1
}
```

### Delete Todo
- **DELETE /delete**
- Removes a specific todo
- Request body:
```json
{
    "Id": 1
}
```

## Todo Object Structure

```json
{
    "Id": 1,
    "Todo": "Sample task",
    "Priority": "High",
    "Group": "Work",
    "Status": "Incomplete"
}
```

## Important Notes

- This is an in-memory implementation, meaning all todos will be lost when the server restarts
- Todo IDs are automatically generated sequentially
- The application runs on port 3000 by default

## Error Handling

The API includes basic error handling for :

- Empty todo list operations
- Non-existent todo operations
- Invalid request formats

