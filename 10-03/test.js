const express = require('express')
const app = express()
const port = 3000
//www.w3cschool.cn

var arr = ['how', 'are', 'you', 'I', 'am', 'fine', 'thanks'];
var arr1 = [];

// console.log(arr.length);

// function findFunc(input) {    
//     let i = 0; //i=0,
//     for( ; i<=arr[arr.length]; i++){
//         if(arr[i].indexOf(input) != -1){
//             arr1.push(arr[i]);
//         }
//         continue;
//     }
//     // console.log(arr[i]);
//     // console.log(arr1);
//     // return JSON.stringify(arr1);
//     return arr1;
// }
function findFunc(input) { 
    for(let i=0 ; i<arr.length; i++){
        if(arr[i].indexOf(input) != -1){
            const currenRow = arr[i];
            arr1.push(currenRow);
            // Array.prototype.push.apply(arr1, arr[i]);
        }
        continue;
    }
    return arr1;
}
// arr1.push(1);

app.get('/', function(req, res) {
    var inputFromWeb = req.query.s;
    // foundResult = findFunc(inputFromWeb);
    arr1 = findFunc(inputFromWeb);
    // arr1.push(foundResult); 
    // res.send(foundResult);
    res.send(arr1);
})

app.listen(3000)