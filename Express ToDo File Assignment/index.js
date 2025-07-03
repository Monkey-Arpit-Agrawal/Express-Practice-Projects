/* 
File System Based Todo App using Express.js that allows the user to :-
Add a new todo , Retrieve all todos , Clear All todos , Delete a specific todo , Update a todo , Mark a todo as completed
*/

// Imporing Dependencies

const fs = require('fs')

const express = require('express');
const { console } = require('inspector');
const app = express()

// Middleware 
app.use(express.json()) ;

// Landing Page
app.get('/' , function(req,res){
    res.status(200).send("<h1>ToDo List</h1> <h2> In Memory </h2> <ul> <li>Add a New todo </li> <li>Retrieve All Todos</li> <li>Clear All Todos </li> <li>Delete a Specific Todo </li> <li>Update A Todo </li> <li>Mark a todo as Complete</li> </ul>")
})

// Function parseTodo

function parseTodo(result) {

    try {

        let data = JSON.parse(result)

        if (Array.isArray(data)){
            return data 
        } else {
            let emptyArray = []
            return emptyArray
        }

    } catch (error) {

        return []
    }
}

// Add A ToDo

app.post('/add' , function (req,res){

    let todo = req.body.Todo
    let priority = req.body.Priority
    let group = req.body.Group

    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {
        if (err) {
            res.status(500).json({
                "Message" : "Error Occurred . Please Try Again"
            })
        } else {
            todoArray = parseTodo(result)

            let todoId = 0 

            if (todoArray.length != 0){
                todoId = todoArray[todoArray.length - 1].Id
            }

            let todoObj = {
                Id : todoId + 1 ,
                Todo : todo ,
                Priority : priority ,
                Group : group ,
                Status : 'Incomplete'
            }

            todoArray.push(todoObj)

            fs.writeFile('./todos.json' , JSON.stringify(todoArray , null , 2) , (err) => {
                if (err) {
                    res.send(500).json({
                        "Message" : "Todo Cannot Be Added . Please Try Again"
                    })
                } else {
                    res.status(200).json({
                        "Message" : "Todo Added Successfully"
                    })
                }
            })
        }
    })
})

// Retrieve All Todos

app.get('/retrieve' , function (req , res) {
    
    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {
        if (err) {
            res.status(500).json({
                "Message" : "Error Has Occurred . Please Try Again"
            })
        } else {
            let todoArray = parseTodo(result)

            if(todoArray.length == 0) {
                res.status(404).json({
                    "Message" : "ToDo List is Empty"
                })
            } else {
                res.status(200).json({
                    "ToDo List " : todoArray
                })
            }
        }
    })
})

// Clear All Todos

app.get('/clear' , function (req , res) {
    
    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {
        if (err) {
            res.status(500).json({
                "Message" : "Error Has Occurred . Please Try Again"
            })
        } else {
            let todoArray = []

            fs.writeFile('./todos.json' , JSON.stringify(todoArray , null , 2) , (err) => {
                if (err) {
                    res.status(500).json({
                        "Message" : "Error Occurred . Please Try Again"
                    })
                } else {
                    res.status(200).json({
                        "Message" : "Todo List is Cleared"
                    })
                }
            })
        }
    })
})

// Update A Todo

app.put('/update' , function (req , res) {

    let id = req.body.Id
    let todo = req.body.Todo
    let priority = req.body.Priority
    let group = req.body.Group

    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {

        if (err) {
            res.status(500).json({
                "Message" : "Error Has Occurred . Please Try Again"
            })

        } else {

            let todoArray = parseTodo(result)

            if (todoArray.length == 0){
                res.status(404).json({
                    "Message" : "ToDo List is Empty"
                })

            } else {

                let todoExistIndex = todoArray.findIndex((todoObj) => todoObj.Id == id) 

                if (todoExistIndex == -1) {
                    res.status(404).json({
                        "Message" : "ToDo Does Not Exist"
                    })
                } else {

                    todoArray.forEach((todoObj) => {
                        if (todoObj.Id == id) {
                            todoObj.Todo = todo ?? todoObj.Todo
                            todoObj.Priority = priority ?? todoObj.Priority
                            todoObj.Group = group ?? todoObj.Group
                        }
                    })

                    fs.writeFile('./todos.json' , JSON.stringify(todoArray , null , 2) , (err) => {
                        if (err) {
                            res.status(500).json({
                                "Message" : "Error Occurred . Please Try Again"
                            })
                        } else {
                            res.status(200).json({
                                "Message" : "Todo Updated"
                            })
                        }
                    })
                }
            }          
        }
    })
})

// Mark A Todo Complete

app.put('/complete' , function (req , res) {

    let id = req.body.Id

    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {

        if (err) {
            res.status(500).json({
                "Message" : "Error Has Occurred . Please Try Again"
            })

        } else {

            let todoArray = parseTodo(result)

            if (todoArray.length == 0){
                res.status(404).json({
                    "Message" : "ToDo List is Empty"
                })

            } else {

                let todoExistIndex = todoArray.findIndex((todoObj) => todoObj.Id == id) 

                if (todoExistIndex == -1) {
                    res.status(404).json({
                        "Message" : "ToDo Does Not Exist"
                    })
                } else {

                    todoArray.forEach((todoObj) => {
                        if (todoObj.Id == id) {
                            todoObj.Status = "Complete"
                        }
                    })

                    fs.writeFile('./todos.json' , JSON.stringify(todoArray , null , 2) , (err) => {
                        if (err) {
                            res.status(500).json({
                                "Message" : "Error Occurred . Please Try Again"
                            })
                        } else {
                            res.status(200).json({
                                "Message" : "Todo Marked Complete"
                            })
                        }
                    })
                }
            }          
        }
    })
})

// Delete A Specific Todo

app.delete('/delete' , function (req , res) {

    let id = req.body.Id

    fs.readFile('./todos.json' , 'utf-8' , (err , result) => {

        if (err) {
            res.status(500).json({
                "Message" : "Error Has Occurred . Please Try Again"
            })

        } else {

            let todoArray = parseTodo(result)

            if (todoArray.length == 0){
                res.status(404).json({
                    "Message" : "ToDo List is Empty"
                })

            } else {

                let todoExistIndex = todoArray.findIndex((todoObj) => todoObj.Id == id) 

                if (todoExistIndex == -1) {
                    res.status(404).json({
                        "Message" : "ToDo Does Not Exist"
                    })
                } else {

                    todoArray.forEach((todoObj) => {
                        if (todoObj.Id == id) {
                            let deleteTodo = todoArray.indexOf(todoObj)
                            todoArray.splice(deleteTodo , 1)
                        }
                    })

                    fs.writeFile('./todos.json' , JSON.stringify(todoArray , null , 2) , (err) => {
                        if (err) {
                            res.status(500).json({
                                "Message" : "Error Occurred . Please Try Again"
                            })
                        } else {
                            res.status(200).json({
                                "Message" : "Todo Deleted Successfully"
                            })
                        }
                    })
                }
            }          
        }
    })
})

app.listen(3000)