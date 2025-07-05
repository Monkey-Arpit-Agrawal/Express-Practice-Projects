/*

# Creating an express app

Lets initialise an express app that we will use to generate an `authenticated backend` today.
Initialise an empty Node.js project .
Create an index.js file, open the project in visual studio code
Add express as a dependency
Create two new  POST routes, one for signing up and one for signing in
Use express.json as a middleware to parse the post request body
Create an in memory variable called users where you store the username , password and a token (we will come to where this token is created later.
Complete the signup endpoint to store user information in the in memory variable
Create a function called generateToken that generates a random string for you
Finish the signin endpoint. It should generate a token for the user and put it in the in memory variable for that user

This can be improved further by
1. Adding zod for input validation
2. Making sure the same user cant sign up twice
3. Persisting data so it stays even if the process crashes
We’ll be covering all of this eventually

Now , Let’s create an endpoint (/me ) that returns the user their information `only if they send their 

*/

const express = require('express') ;
const app = express() ;

let users = [] ;

function generateToken () {
    
    let characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&' ;
    let characterSetLength = characterSet.length ;
    let token = '' ;
    for (let i = 0; i < 10 ; i++) {
        token += characterSet[Math.floor(Math.random() * characterSetLength)] ;
    }
    return token ;
}

app.use(express.json()) ;

app.post('/signup' , function (req , res) {
    
    let username = req.body.username ;
    let password = req.body.password ;

    let newUser = {
        "username" : username ,
        "password" : password
    } ;

    users.push(newUser) ;

    res.status(200).json({
        'Message' : 'User Signed Up Successfully'
    }) ;

}) ;

app.post('/signin' , function (req , res) {

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.findIndex((user) => (user.username == username && user.password == password)) ;

    if (userExists == -1) {
        res.status(404).json({
            'Message' : 'Invalid Username Or Password'
        })
    } else {
        
        let token = generateToken() ;
        users[userExists].token = token ;

        res.status(200).json({
            'Message' : 'Signed In Successfully', 
            'Token' : token
        }) ;
    } ;
}) ;

app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;