const express = require('express') ;
const app = express() ;

const jwt = require('jsonwebtoken') ;

let users = [] ;

app.use(express.json() ;

app.post('/signup' , function (req , res){

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.find((user) => user.username == username) ;

    if (userExists) {
        
    } else {
        
    }

}) ;

app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;