const express = require('express') ;
const app = express() ;

const jwt = require('jsonwebtoken') ;

let users = [] ;

let JWT_SECRET = "iLoveShiphaliRana" ;

app.use(express.json()) ;

app.post('/signup' , function (req , res){

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.find((user) => user.username == username) ;

    if (userExists) {
        
        res.status(404).send('User Already Exists') ;

    } else {
        
        let newUser = {
            'username' : username ,
            'password' : password
        }

        users.push(newUser) ;

        res.status(200).send('Signed Up Successfully') ;

    }

}) ;

app.post('/signin' , function (req , res){

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.findIndex((user) => user.username == username && user.password == password) ;

    if (userExists == -1) {
        
        res.status(404).send('User Does Not Exists') ;

    } else {
        
        let token = jwt.sign({
            'username' : users[userExists].username
        } , JWT_SECRET) ;

        res.status(200).json({
            'Message' : 'Signed In Successfully' , 
            'token' : token
        }) ;
    }
}) ;

app.get('/me' , function (req,res) {
    let userSendToken = req.headers['token'] ;

    try {
        let authenticatedUser = jwt.verify(userSendToken,JWT_SECRET) ;
        let authenticatedUserUsername = authenticatedUser.username ;

        let info = users.findIndex((user) => (user.username == authenticatedUserUsername) ) ;

        let information = users[info].username ;

        res.status(200).json({
            'Information' : information
        })

    } catch (error) {
        res.status(404).send('Invalid User') ;
    }
}) ;

app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;