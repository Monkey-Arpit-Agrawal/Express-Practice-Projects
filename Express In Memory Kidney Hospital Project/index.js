// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

// 1. What should happen if they try to delete when there are no kidneys?
// 2. What should happen if they try to make a kidney healthy when all are already healthy

// Assume There is only a single user John


/* In Memory Kidney Hospital */

const express = require('express') ;
const app = express() ;

let user = {
    Name : "John" ,
    kidneys : [
        {
            Status : 'Healthy'
        } , 
        {
            Status : 'Unhealthy'
        }
    ]
} 

let users = [user] ;

app.use(express.json()) ;

app.get('/' , function (req , res ) {
    
    let totalNumberOfKidneys = users[0].kidneys.length ;
    let totalNumberOFfHealthyKidneys = (users[0].kidneys.filter((kidney) => (kidney.Status === 'Healthy'))).length ;
    let totalNumberOfUnhealthyKidneys = totalNumberOfKidneys - totalNumberOFfHealthyKidneys ;

    res.status(200).json({
        "Total Kidneys : " : totalNumberOfKidneys ,
        "Healthy Kidneys : " : totalNumberOFfHealthyKidneys ,
        "Unhealthy Kidneys : " : totalNumberOfUnhealthyKidneys
    })

}) ;

app.post('/' , function (req , res) {
    
    let statusOfKidney = req.body.status ;

    let newKidney = {Status : statusOfKidney} ;
    users[0].kidneys.push(newKidney) ;

    res.status(200).send(
        "Kidney Added Successfully"
    ) ;

}) ;

app.listen( 3000 , () => {
    console.log(`Server is running on the Port : ${3000}`) ;
}) ;