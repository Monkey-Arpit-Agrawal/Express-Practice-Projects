// import axios from 'axios';

// async function acquireData() {
//     try {
//         let api = axios.create({
//             baseURL : 'https://httpdump.app/dumps' ,
//             headers : {
//                 'A' : "a"
//             }
//         })
//         let response = await api.post('/271e15b5-4492-430a-b8bd-b4eff337e087' , {'body' : "567"}) ;
//         console.log(response.data) ;
//     } catch (error) {
//         console.log(error) ;
//     }
// }

// acquireData() ;

// // Practiced all the 3 forms of axios syntax

// // fetch

async function fetchingData () {
    try {
        let response = await fetch('https://httpdump.app/dumps/271e15b5-4492-430a-b8bd-b4eff337e087' , {
            method : 'PUT' ,
            headers : {
                'AAA' : 'AAA'
            } ,
            body : JSON.stringify({
                'jj' : 'ss'
            })
        }) ;
        let finalData = await response.text() ;
        console.log(finalData) ;
    } catch (error) {
        console.log(error)
    }
}

fetchingData() ;