/* 
In-Memory Todo App using Express.js that allows the user to :-
Add a new todo , Retrieve all todos , Clear All todos , Delete a specific todo , Update a todo , Mark a todo as completed
*/

// Importing Dependencies
const express = require('express') ;
const app = express() ;

// Middleware 
app.use(express.json()) ;

// Initialise A Empty Array for ToDo Storage
todoArray = []

// Landing Page
app.get('/' , function(req,res){
    res.status(200).send("<h1>ToDo List</h1> <h2> In Memory </h2> <ul> <li>Add a New todo </li> <li>Retrieve All Todos</li> <li>Clear All Todos </li> <li>Delete a Specific Todo </li> <li>Update A Todo </li> <li>Mark a todo as Complete</li> </ul>")
})

// Add A ToDo

app.post('/add' , function (req , res) {
    
    let todoId = 0

    if(todoArray.length != 0){
        todoId = todoArray[todoArray.length - 1].Id
    }

    let todo = req.body.Todo
    let priority = req.body.Priority
    let group = req.body.Group

    todoObj = {
        Id : todoId + 1 ,
        Todo : todo ,
        Priority : priority ,
        Group : group ,
        Status : 'Incomplete'
    }

    todoArray.push(todoObj)

    res.status(200).json({
        "Message" : "ToDo Added Successfully"
    })

}) ;

// Retrieve All Todo

app.get('/retrieve' , function (req , res) {
    res.status(200).json(todoArray)
}) ;

// Clear All Todo

app.get('/clear' , function (req , res){
    newArray = []
    todoArray = newArray
    res.status(200).json({
        "Message" : "ToDo List Cleared"
    })
}) ;

// Update A ToDo

app.put('/update' , function (req , res) {

    let newId = req.body.Id
    let newTodo = req.body.Todo
    let newPriority = req.body.Priority
    let newGroup = req.body.Group

    if (todoArray.length == 0){
        res.status(404).send("ToDo List is Empty")
    } else {

        if ((todoArray.filter((todoObj) => todoObj.Id == newId).length != 0)){
            todoArray.forEach((todoObj) => {
                if (todoObj.Id == newId) {
                    todoObj.Todo = newTodo ?? todoObj.Todo
                    todoObj.Priority = newPriority ?? todoObj.Priority
                    todoObj.Group = newGroup ?? todoObj.Group

                    res.status(200).json({
                        "Message" : "Todo Updated Successfully" ,
                        "Updated Todo" : todoObj
                    })
                }
            })
        } else {
            res.status(404).json({
                "Message" : "ToDo Does Not Exist"
            })
        }
    }
})
        
// Mark A Todo Complete       

app.put('/complete' , function (req , res) {

    let newId = req.body.Id

    if (todoArray.length == 0){
        res.status(404).send("ToDo List is Empty")
    } else {

        if ((todoArray.filter((todoObj) => todoObj.Id == newId).length != 0)){
            todoArray.forEach((todoObj) => {
                if (todoObj.Id == newId) {
                    todoObj.Status = 'Complete'

                    res.status(200).json({
                        "Message" : "Todo Marked Complete Successfully" ,
                        "Updated Todo" : todoObj
                    })
                }
            })
        } else {
            res.status(404).json({
                "Message" : "ToDo Does Not Exist"
            })
        }
    }
})

// Delete a Specific ToDo

app.delete('/delete' , function (req , res) {
    
    let newId = req.body.Id

    if (todoArray.length == 0){
        res.status(404).send("ToDo List is Empty")
    } else {

        if ((todoArray.filter((todoObj) => todoObj.Id == newId).length != 0)){
            todoArray.forEach((todoObj) => {
                if (todoObj.Id == newId) {

                    let todoIndex = todoArray.indexOf(todoObj)
                    todoArray.splice(todoIndex,1)

                    res.status(200).json({
                        "Message" : "Todo Deleted Successfully" ,
                        "Updated TodoList" : todoArray
                    })
                }
            })
        } else {
            res.status(404).json({
                "Message" : "ToDo Does Not Exist"
            })
        }
    }
})


app.listen(3000)