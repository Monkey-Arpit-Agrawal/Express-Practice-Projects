// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney whether healthy or unhealthy
// 3. PUT - User can replace all kidneys and make them healthy
// 4. DELETE - User can remove all the unhealthy kidneys

// 1. What should happen if they try to delete when there are no unhealthy kidneys ?
// 2. What should happen if they try to make a kidney healthy when all are already healthy ?

// Assume There is only a single user John


/* In Memory Kidney Hospital */

const express = require('express') ;
const app = express() ;

const path = require('path') ;

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

function isValid() {
    
    let unhealthyKidney = (users[0].kidneys.filter((kidney) => (kidney.Status == "Unhealthy"))).length ;

    if (unhealthyKidney > 0) {
        return true ;
    } else {
        return false ;
    }

}

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

app.put('/' , function (req,res){

    let validity = isValid() ;

    if (validity) {
        
        users[0].kidneys.forEach((kidney) => (kidney.Status = 'Healthy')) ;

        res.status(200).send('Updated The Kidneys Successfully') ;
    } else {
        res.status(400).send('No Unhealthy Kidneys') ;
    }

}) ;

app.delete('/' , function (req , res) {

    let validity = isValid() ;

    if (validity) {
        users[0].kidneys.forEach((kidney,index) => {
            if (kidney.Status == 'Unhealthy'){
                users[0].kidneys.splice(index,1) ;
            }
        })

        res.status(200).send('Done Deletion') ;

    } else {
        res.status(400).send('No Unhealthy Kidneys') ;
    }
    
}) ;

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,"index.html")) ;
}) ;


app.listen( 3000 , () => {
    console.log(`Server is running on the Port : ${3000}`) ;
}) ;