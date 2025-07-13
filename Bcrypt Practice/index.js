import bcrypt from 'bcrypt' ;

let myPlainTextPassword = 'iloveShiphaliRana' ;
let numberOfSaltRounds = 5 ;
let newPassword = 'iloveShiphaliRana' ;
let hhash = "" ;

// Approach - 1

// bcrypt.hash(myPlainTextPassword , numberOfSaltRounds , (err,hash) => {
//     if (err) {
//         console.log(`Error Occurred During Hashing .\nErrror : ${err}`) ;
//     } else {
//         console.log(hash) ;
//         hhash = hash ;
//     }
// }) ;

// Approach - 2

async function hashinnn() {
    try {
        hhash = await bcrypt.hash(myPlainTextPassword,numberOfSaltRounds) ;
        console.log(hhash) ;
    } catch (error) {
        console.log(`Error Occurred During Hashing .\nErrror : ${error}`) ;
    }
}

// // Approach - 3

// try {
//     let hash = await bcrypt.hash(myPlainTextPassword,numberOfSaltRounds) ;
//     console.log(hash) ;
// } catch (error) {
//     console.log(`Error Occurred During Hashing .\nErrror : ${error}`) ;
// }

// Okay Dokie



async function commmm() {
   try {
    let result = await bcrypt.compare(newPassword,hhash) ;
    console.log(result) ;
    } catch (error) {
        console.log(`Error Occurred During Hashing .\nErrror : ${error}`) ;
    } 
}


async function main() {
    await hashinnn() 
    await commmm()
}

main()