require('dotenv').config() ;

const express = require('express') ;
const app = express() ;

const jwt = require('jsonwebtoken') ;

const PORT = process.env.PORT || 3000 ;

function auth (req,res,next) {
    
} ;

app.use(express.json()) ;

app.get('/todos' , auth , function (req,res) {
    
}) ;

app.post('/signup' , function (req,res) {
    
}) ;

app.post('/signin' , function (req,res) {
    
}) ;

app.post('/todo' , auth , function (req,res) {
    
}) ;

app.listen(PORT , () => {
    console.log(`App is running on the Port : ${PORT}`) ;
}) ;