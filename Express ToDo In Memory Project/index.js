/* 
In-Memory Todo App using Express.js that allows the user to :-
Add a new todo , Retrieve all todos , Clear All todos , Delete a specific todo , Update a todo , Mark a todo as completed
*/

// Importing Modules

const express = require('express') ;
const app = express() ;

const port = 3000 ;

// In Memory Array

let todoArray = [] ;

// Route Handlers



// Server Running

app.listen(port || 3000 , () => {
    console.log(`App is running on the port : ${port}`) ;
}) ;